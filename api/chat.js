export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    // CORS HEADERLARI (405 HATASINI ÇÖZEN KISIM BURASI)
    const headers = {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*', // HER YERDEN İZİN VER
        'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Content-Type': 'application/json'
    };

    // 1. Tarayıcı ön kontrol (OPTIONS) yaparsa "TAMAM" de ve çık.
    // (Bunu yapmadığımız için 405 veriyordu)
    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    // 2. Sadece POST
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Sadece POST atabilirsin.' }), { status: 405, headers });
    }

    try {
        const body = await req.json();
        const { message, image } = body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ reply: "API Key Eksik!" }), { status: 500, headers });
        }

        const contentsParts = [{
            text: `Sen BurakAI Hoca'sın. Müzik öğretmenisin. Cevapların kısa, öz ve samimi olsun. Öğrenci mesajı: ${message || 'Selam.'}`
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

        // MODEL ADI: gemini-1.5-flash (En güncel ve stabil olanı)
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
            return new Response(JSON.stringify({ reply: "Google Hatası: " + (data.error?.message || "Bilinmiyor") }), { status: 500, headers });
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap yok.";
        
        return new Response(JSON.stringify({ reply: replyText }), { status: 200, headers });

    } catch (error) {
        return new Response(JSON.stringify({ reply: "Sunucu hatası: " + error.message }), { status: 500, headers });
    }
}
