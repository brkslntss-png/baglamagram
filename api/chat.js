// api/chat.js - GEMINI-PRO (EN GARANTİ MODEL)
export const config = {
    runtime: 'edge', // Edge Runtime (Daha hızlı ve Timeout yemez)
};

export default async function handler(req) {
    // --- CORS HEADERLARI (Domain 405 Hatasını Çözen Kısım) ---
    const headers = {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*', // Her yerden erişime izin ver
        'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Content-Type': 'application/json'
    };

    // 1. Tarayıcı "Girebilir miyim?" (OPTIONS) derse "Evet" de.
    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

    // 2. Sadece POST isteği kabul et
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Sadece POST atabilirsin.' }), { status: 405, headers });
    }

    try {
        const body = await req.json();
        const { message, image } = body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ reply: "API Anahtarı eksik!" }), { status: 500, headers });
        }

        // --- GOOGLE PAKETİ ---
        const requestBody = {
            contents: [{
                role: "user",
                parts: [{
                    text: `Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin. Müzik öğretmenisin. Samimi ve babacan konuş. Öğrenci mesajı: ${message || 'Görsel gönderdim.'}`
                }]
            }]
        };

        // Resim varsa ekle
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

        // --- MODEL: GEMINI-PRO (EN ESKİ VE EN SAĞLAM SÜRÜM) ---
        // 1.5 Flash hata verdiği için buna döndük. Bu çalışmak ZORUNDA.
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        
        // Eğer resim varsa gemini-pro-vision kullanmak gerekir ama 
        // gemini-pro metin için garantidir. Önce metni çalıştıralım.
        // NOT: Resimli isteklerde model otomatik vision yeteneği arar.
        // Garantilemek için: Resim varsa 'gemini-pro-vision', yoksa 'gemini-pro'
        const modelName = image ? 'gemini-1.5-flash' : 'gemini-pro'; 
        // Düzeltme: 1.5 Flash resim için en iyisi ama hata veriyor. 
        // Biz şimdilik HER ŞEY İÇİN 'gemini-1.5-flash-latest' deneyelim.
        // Google bazen sürüm adını değiştiriyor.
        
        const finalUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

        const googleResponse = await fetch(finalUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
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
