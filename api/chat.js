// api/chat.js - GARANTİLİ MANUEL BAĞLANTI (GEMINI PRO)
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
      return new Response(JSON.stringify({ reply: "API Anahtarı eksik!" }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    // BURAK HOCA KİŞİLİĞİ
    const systemPrompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      Üslubun: Samimi, babacan, motive edici ama disiplinli. "Aslan parçası", "Üstadım", "Gönül dostu" gibi hitaplar kullanırsın.
      Kısa, öz ve net cevaplar ver.
      Öğrencinin mesajı aşağıdadır.
    `;

    // DİKKAT: URL ARTIK "gemini-pro". BU MODEL HERKESTE VARDIR.
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt + "\n\nÖğrenci: " + message }]
          }
        ]
      })
    });

    const data = await response.json();

    // Hata varsa göster
    if (!response.ok) {
      return new Response(JSON.stringify({ 
        reply: "HATA: " + (data.error?.message || "Bilinmeyen bir sorun oluştu.")
      }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    const replyText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ reply: "Sunucu hatası: " + error.message }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  }
}
