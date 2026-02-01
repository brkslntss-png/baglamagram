// api/chat.js - GARANTİLİ NODE.JS SÜRÜMÜ
module.exports = async (req, res) => {
    // 1. CORS AYARLARI (En Tepede - Çökse bile bunları göndermeye çalışır)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // 2. Tarayıcı Kontrolü (OPTIONS)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 3. Test için GET isteği (Tarayıcıdan linke tıklayınca çalışıyor mu?)
    if (req.method === 'GET') {
        return res.status(200).json({ durum: "ÇALIŞIYOR", mesaj: "Motor sağlam aslan parçası." });
    }

    // 4. Sadece POST kabul et
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST atabilirsin.' });
    }

    try {
        const { message, image } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        // KONTROL: API KEY VAR MI?
        if (!apiKey) {
            return res.status(200).json({ reply: "HATA: Vercel ayarlarında API Anahtarı (GEMINI_API_KEY) girilmemiş!" });
        }

        // Google'a Gönderilecek Paket
        const contentsParts = [{
            text: `Sen BurakAI Hoca'sın. Müzik öğretmenisin. Üslubun samimi. Gelen mesajı veya notayı yorumla. Öğrenci: ${message || 'Görsel gönderdim.'}`
        }];

        // Resim varsa ekle
        if (image) {
            try {
                const base64Data = image.split(',')[1];
                const mimeType = image.split(';')[0].split(':')[1];
                contentsParts.push({
                    inlineData: { mimeType: mimeType, data: base64Data }
                });
            } catch (e) {
                console.error("Resim hatası:", e);
            }
        }

        // Node.js 18+ için built-in fetch kullanımı
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: contentsParts }]
            })
        });

        const data = await response.json();

        // Google Hata Döndürdüyse
        if (!response.ok) {
            return res.status(200).json({ reply: "Google Hatası: " + (data.error?.message || "Bilinmiyor") });
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap yok.";
        
        // BAŞARILI SONUÇ
        return res.status(200).json({ reply: replyText });

    } catch (error) {
        // KOD PATLARSA BURAYA DÜŞER VE HATAYI YAZAR
        return res.status(200).json({ reply: "SİSTEM HATASI: " + error.message });
    }
};
