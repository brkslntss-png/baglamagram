// api/chat.js - STANDART NODE.JS (EN SAĞLAM VERSİYON)
export default async function handler(req, res) {
    // 1. CORS AYARLARI (Manuel ve Kesin)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Tüm sitelere kapı açık
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // 2. Tarayıcı "Girebilir miyim?" (OPTIONS) derse hemen "Evet" de.
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 3. Sadece POST isteğini kabul et
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST atabilirsin.' });
    }

    try {
        // Vercel Standart modunda req.body otomatik çözülür
        const { message, image } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        // KONTROL 1: API Anahtarı var mı?
        if (!apiKey) {
            console.error("HATA: API Anahtarı Vercel ayarlarında bulunamadı!");
            return res.status(500).json({ reply: "Sistem hatası: API Anahtarı eksik. (Vercel Settings > Environment Variables kısmını kontrol et)" });
        }

        // --- GOOGLE'A GÖNDERİLECEK PAKET ---
        const contentsParts = [{
            text: `Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin. Müzik öğretmenisin. Üslubun samimi ve babacan. Gelen mesajı veya notayı yorumla. Asla yapay zeka olduğunu söyleme. Öğrenci mesajı: ${message || 'Görsel gönderdim.'}`
        }];

        // Resim varsa pakete ekle
        if (image) {
            try {
                // "data:image/jpeg;base64," kısmını temizle
                const base64Data = image.split(',')[1];
                const mimeType = image.split(';')[0].split(':')[1];
                
                contentsParts.push({
                    inlineData: { mimeType: mimeType, data: base64Data }
                });
            } catch (e) {
                console.error("Resim işleme hatası:", e);
                // Resim bozuksa bile metni gönder, patlama.
            }
        }

        // --- FETCH İLE GOOGLE'A BAĞLAN ---
        // Not: gemini-1.5-flash modeli daha kararlıdır, onu kullanıyoruz.
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        
        const googleResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: contentsParts }]
            })
        });

        const data = await googleResponse.json();

        // Google hata verdiyse logla ve kullanıcıya söyle
        if (!googleResponse.ok) {
            console.error("Google Hatası:", JSON.stringify(data));
            return res.status(500).json({ reply: "Google amca şu an cevap veremiyor. Hata kodu: " + (data.error?.code || "Bilinmiyor") });
        }

        // Cevabı al
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Bir şeyler duydum ama anlayamadım evladım.";
        
        // Başarılı Cevap
        return res.status(200).json({ reply: replyText });

    } catch (error) {
        console.error("Sunucu Genel Hatası:", error);
        return res.status(500).json({ reply: "Sunucu hatası oluştu: " + error.message });
    }
}
