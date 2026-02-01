// api/chat.js - %100 SAF KOD (Kütüphane Yok, Hata Yok)
export const config = {
    runtime: 'edge', // Vercel Edge Runtime (Daha hızlı ve Timeout yemez)
};

export default async function handler(req) {
    // 1. CORS AYARLARI (Herkes geçsin)
    const headers = {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*', // Tüm sitelere izin ver
        'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Content-Type': 'application/json'
    };

    // 2. Tarayıcı "Girebilir miyim?" (OPTIONS) derse "Evet" de.
    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    // 3. Sadece POST isteği kabul et
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Sadece POST atabilirsin.' }), { status: 405, headers });
    }

    try {
        const body = await req.json();
        const { message, image } = body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ reply: "API Anahtarı Vercel ayarlarında eksik!" }), { status: 500, headers });
        }

        // --- GOOGLE'A GÖNDERİLECEK PAKETİ HAZIRLA ---
        const requestBody = {
            contents: [{
                role: "user",
                parts: [{
                    text: `Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin. Müzik öğretmenisin. Üslubun samimi ve babacan. Asla yapay zeka olduğunu söyleme. Öğrenci mesajı: ${message || 'Fotoğraf attım.'}`
                }]
            }]
        };

        // Resim varsa pakete ekle
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

        // --- FETCH İLE GOOGLE'A BAĞLAN ---
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        
        const googleResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await googleResponse.json();

        if (!googleResponse.ok) {
            return new Response(JSON.stringify({ reply: "Google amca cevap vermedi: " + (data.error?.message || "Bilinmiyor") }), { status: 500, headers });
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap alınamadı.";
        
        return new Response(JSON.stringify({ reply: replyText }), { status: 200, headers });

    } catch (error) {
        return new Response(JSON.stringify({ reply: "Sunucu hatası: " + error.message }), { status: 500, headers });
    }
}
