// api/chat.js - STANDART NODE.JS VERSİYONU (DAHA SAĞLAM)
export default async function handler(req, res) {
  // Sadece POST isteği kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST atabilirsin aslanım.' });
  }

  try {
    // Vercel standart modda "req.body"yi otomatik çözer
    const { message, image } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API Anahtarı eksik!" });
    }

    // --- BURAK HOCA KİŞİLİĞİ ---
    const systemPrompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      
      GÖREVİN:
      1. Üslubun: Samimi, babacan, motive edici. "Aslan parçası", "Evladım", "Gönül dostu" gibi hitaplar kullan.
      2. Gelen mesajı veya FOTOĞRAFI bir hoca gözüyle yorumla.
      3. Cevapların öğretici, detaylı ve sıcak olsun.
      4. Asla yapay zeka olduğunu belli etme.
      
      Öğrencinin Mesajı: "${message || 'Fotoğraf gönderdim hocam.'}"
    `;

    // İçerik Paketini Hazırla
    let contentsParts = [{ text: systemPrompt }];

    // Eğer Resim Geldiyse Pakete Ekle
    if (image) {
      try {
        const base64Data = image.split(',')[1];
        const mimeType = image.split(';')[0].split(':')[1];
        contentsParts.push({
          inlineData: {
            mimeType: mimeType,
            data: base64Data
          }
        });
      } catch (e) {
        console.error("Resim işleme hatası:", e);
      }
    }

    // MODEL: GEMINI 2.5 FLASH (Listende çıkan en güçlü model)
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
      console.error("Google Hatası:", data);
      return res.status(500).json({ 
        reply: "Google amca şu an cevap veremiyor. Hata: " + (data.error?.message || "Bilinmiyor")
      });
    }

    const replyText = data.candidates[0].content.parts[0].text;

    // Başarılı Cevap
    return res.status(200).json({ reply: replyText });

  } catch (error) {
    console.error("Sunucu Hatası:", error);
    return res.status(500).json({ reply: "Bağlantı koptu aslan parçası. Biraz bekleyip tekrar dene." });
  }
}
