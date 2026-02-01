// api/chat.js - RÖNTGEN VERSİYONU (HATAYI DETAYLI GÖSTERİR)
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Sadece POST isteği atabilirsin.' }), {
      status: 405, headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "Vercel'de API Anahtarı (GEMINI_API_KEY) eksik!" }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    // Google'a Bağlan
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: message }] }]
      })
    });

    const data = await response.json();

    // HATA VARSA DETAYINI YAZDIR (İşte burası bize sebebi söyleyecek)
    if (!response.ok) {
      return new Response(JSON.stringify({ 
        reply: "HATA DETAYI: " + JSON.stringify(data, null, 2) 
      }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    const replyText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ reply: "Bağlantı Hatası: " + error.message }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  }
}
