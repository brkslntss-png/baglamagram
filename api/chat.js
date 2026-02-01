// api/chat.js - SAF JAVASCRIPT MOTOR (KÜTÜPHANESİZ & SAĞLAM)
export default async function handler(req, res) {
  // 1. CORS AYARLARI (Herkes geçsin)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // 2. Tarayıcı Kontrolü (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. GET İsteği (Tarayıcıdan girince çalışıp çalışmadığını görmek için)
  if (req.method === 'GET') {
    return res.status(200).json({ durum: "Online", mesaj: "Motor çalışıyor aslan parçası." });
  }

  // 4. Sadece POST isteği
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST kabul edilir.' });
  }

  try {
    const { message, image } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API Anahtarı Vercel ayarlarında eksik!" });
    }

    // Google'a Gönderilecek Paket
    const requestBody = {
      contents: [{
        role: "user",
        parts: []
      }]
    };

    // Metin Ekle
    requestBody.contents[0].parts.push({
      text: `Sen "BurakAI Hoca"sın. Müzik öğretmenisin. Üslubun samimi ve babacan. Gelen mesajı veya notayı yorumla. Asla yapay zeka olduğunu söyleme. Öğrenci mesajı: ${message || 'Fotoğraf attım.'}`
    });

    // Resim Ekle (Varsa)
    if (image) {
      try {
        const base64Data = image.split(',')[1];
        const mimeType = image.split(';')[0].split(':')[1];
        requestBody.contents[0].parts.push({
          inlineData: { mimeType: mimeType, data: base64Data }
        });
      } catch (e) {
        console.error("Resim hatası:", e);
      }
    }

    // Google'a Fetch İle Bağlan (Kütüphanesiz)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const googleResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    const data = await googleResponse.json();

    if (!googleResponse.ok) {
      return res.status(500).json({ reply: "Google amca kızdı: " + (data.error?.message || "Bilinmeyen hata") });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap alınamadı.";
    
    return res.status(200).json({ reply: replyText });

  } catch (error) {
    return res.status(500).json({ reply: "Sunucu hatası: " + error.message });
  }
}
