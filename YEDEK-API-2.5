// api/chat.js - GEMINI 2.5 FLASH (SENİN İSTEDİĞİN SÜRÜM)
export default async function handler(req, res) {
    // 1. CORS AYARLARI (Manuel ve Kesin)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // 2. Tarayıcı ön kontrolü
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 3. Sadece POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST atabilirsin.' });
    }

    try {
        const { message, image } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ reply: "API Anahtarı eksik!" });
        }

        // --- GOOGLE PAKETİ ---
        const contentsParts = [{
            text: `Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin. Müzik öğretmenisin. Üslubun samimi ve babacan. Asla yapay zeka olduğunu söyleme. Öğrenci mesajı: ${message || 'Görsel gönderdim.'}`
        }];

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

        // --- MODEL DÜZELTİLDİ: GEMINI 2.5 FLASH ---
        // Senin en başta kullandığın ve çalışan sürüm.
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        
        const googleResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: contentsParts }]
            })
        });

        const data = await googleResponse.json();

        // Google Hata Verirse Detayını Gör
        if (!googleResponse.ok) {
            console.error("Google Hatası:", data);
            return res.status(500).json({ reply: "Google Hata Verdi: " + (data.error?.message || "Model adı veya API key sorunu.") });
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap boş döndü.";
        
        return res.status(200).json({ reply: replyText });

    } catch (error) {
        return res.status(500).json({ reply: "Sunucu hatası: " + error.message });
    }
}
