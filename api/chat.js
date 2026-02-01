// api/chat.js - %100 SAF VERCEL FUNCTION (Kütüphane Gerektirmez)
export default async function handler(req, res) {
    // 1. CORS İZİNLERİ (Herkes geçsin)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // 2. Tarayıcı ön kontrol (OPTIONS) yaparsa "Tamam" de.
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 3. Sadece POST kabul et
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST isteği kabul edilir.' });
    }

    try {
        const { message, image } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ reply: "API Key yok! Vercel ayarlarını kontrol et." });
        }

        // --- GOOGLE REST API İÇİN PAKET HAZIRLIĞI ---
        const contentsParts = [{
            text: `Sen BurakAI Hoca'sın. Müzik öğretmenisin. Üslubun samimi ve babacan. Asla yapay zeka olduğunu söyleme. Öğrenci mesajı: ${message || 'Görsel gönderdim.'}`
        }];

        // Resim varsa (Base64 temizliği yaparak ekle)
        if (image) {
            try {
                const base64Data = image.split(',')[1];
                const mimeType = image.split(';')[0].split(':')[1];
                contentsParts.push({
                    inlineData: { mimeType: mimeType, data: base64Data }
                });
            } catch (e) {
                console.error("Resim işleme hatası:", e);
            }
        }

        // --- FETCH İLE DİREKT GOOGLE SUNUCUSUNA BAĞLAN ---
        // Kütüphane yok, direkt adrese gidiyoruz.
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        
        const googleResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: contentsParts }]
            })
        });

        const data = await googleResponse.json();

        if (!googleResponse.ok) {
            return res.status(500).json({ reply: "Google Hata Verdi: " + (data.error?.message || "Bilinmiyor") });
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap boş döndü.";
        
        return res.status(200).json({ reply: replyText });

    } catch (error) {
        return res.status(500).json({ reply: "Sunucu içi hata: " + error.message });
    }
}
