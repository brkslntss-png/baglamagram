// api/chat.js - FOTOĞRAF GÖREBİLEN VERSİYON
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Sadece POST atabilirsin aslanım.' }), {
      status: 405, headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { message, image } = await req.json(); // Artık 'image' de alıyoruz
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "API Anahtarı eksik!" }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    // --- BURAK HOCA KİŞİLİĞİ ---
    const systemPrompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      
      GÖREVİN:
      1. Üslubun: Samimi, babacan, motive edici. "Aslan parçası", "Evladım" gibi hitaplar kullan.
      2. Eğer bir FOTOĞRAF (nota, bağlama tutuşu vb.) gelirse, onu bir hoca gözüyle detaylı incele ve yorumla.
      3. Sorulara detaylı, eğitici cevaplar ver.
      4. Asla yapay zeka olduğunu belli etme.
      
      Öğrencinin Mesajı: "${message}"
    `;

    // İçerik Paketini Hazırla
    let contentsParts = [{ text: systemPrompt }];

    // Eğer Resim Geldiyse Pakete Ekle
    if (image) {
      // Base64 başlığını temizle (data:image/jpeg;base64, kısmını at)
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      contentsParts.push({
        inlineData: {
          mimeType: mimeType,
          data: base64Data
        }
      });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: contentsParts }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ 
        reply: "Gözüm seçemedi evladım, tekrar dene. Hata: " + (data.error?.message || "Bilinmiyor")
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    const replyText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ reply: "Bağlantı koptu. Hata: " + error.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}
