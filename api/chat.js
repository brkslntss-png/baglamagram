// api/chat.js - SAF JAVASCRIPT (KÜTÜPHANESİZ & CORS AÇIK)
export default async function handler(req, res) {
  // 1. CORS İZİNLERİ (Buraya kim gelirse gelsin izin veriyoruz)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Herkese açık
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Tarayıcı "Girebilir miyim?" diye sorarsa (OPTIONS), "Evet" de ve bitir.
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Sadece POST isteği
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST atabilirsin.' });
  }

  try {
    const { message, image } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API Anahtarı bulunamadı!" });
    }

    // --- GOOGLE'A GÖNDERİLECEK PAKETİ HAZIRLA ---
    // Burak Hoca'nın Kişiliği
    const systemPrompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      Üslubun: Samimi, babacan, motive edici. "Aslan parçası", "Evladım" gibi hitaplar kullan.
      Görevin: Gelen mesajı veya FOTOĞRAFI bir hoca gözüyle yorumla.
      Öğrencinin Mesajı: "${message || 'Fotoğraf gönderdim hocam.'}"
    `;

    // İçerik parçaları
    let contentsParts = [{ text: systemPrompt }];

    // Resim varsa pakete ekle (Base64 temizliği yaparak)
    if (image) {
      try {
        const base64Data = image.split(',')[1]; // "data:image/jpeg;base64," kısmını at
        const mimeType = image.split(';')[0].split(':')[1]; // "image/jpeg" kısmını al
        
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

    // --- FETCH İLE GOOGLE'A BAĞLAN (Kütüphanesiz) ---
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const googleResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: contentsParts }]
      })
    });

    const data = await googleResponse.json();

    // Google hata verdiyse
    if (!googleResponse.ok) {
      return res.status(500).json({ 
        reply: "Google amca cevap vermedi. Hata: " + (data.error?.message || "Bilinmiyor") 
      });
    }

    // Cevabı al
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Bir şeyler ters gitti, cevap alamadım.";

    // Cevabı gönder
    return res.status(200).json({ reply: replyText });

  } catch (error) {
    console.error("Sunucu Hatası:", error);
    return res.status(500).json({ reply: "Sunucu hatası oluştu evladım: " + error.message });
  }
}
