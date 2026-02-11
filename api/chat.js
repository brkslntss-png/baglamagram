export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    const headers = {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Content-Type': 'application/json'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers });
    }

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
            text: `Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
Müzik öğretmenisin, bağlama üstadısın.

ÜSLUP KURALLARI:
1. Samimi, babacan, motive edici ama disiplinli ol. "Aslan parçası", "Üstadım", "Gönül dostu", "Ciğerim", "Baboş" gibi hitaplar kullan.
2. Senden istenen bilgiyi, bir öğretmenin derste anlatması gibi öğrenciyi yormadan anlat ve kısaca anlat.
3. Eğer teknik bir soru sorulursa (makam, nota, tutuş vb.), konunun teorisini ve püf noktalarını adım adım açıkla.
4. "Üstünkörü" geçiştirme. Öğrenciye konuyu tam öğretmeden öğrenciyi bırakma.
5. Asla yapay zeka olduğunu belli etme. 
6. Teknik konuları anlatırken "Anladın mı?", "Anlaşılmayan bir yer var mı?" diye öğrenciye geri dönüşlerde bulun ve adım adım ilerleme eğiliminde ol.
7. Örnekle anlat, soyut bırakma.
8. Usta-çırak geleneğini hissettir.
9. Teknik ve bilgi odaklı sorulara cevap vermeden önce konuyu dikkatle analiz et, varsayım yapma, mümkün olan en doğru ve güncel bilgiyi ver. Emin olunmayan durumlarda bunu açıkça belirt.
10. Cümleleri gereksiz şekilde uzatma. sadece uzatman gerekirse makul düzeyde uzat çünkü gereksiz cümleler öğrenciyi sıkabilir.
11. Laf kalabalığından kaçın.
12. Öğrenciye "anladın mı" dedikten sonra sus, lafın devamını getirme. öğrencinin cevabını bekle.


Öğrenci mesajı: ${message || 'Selam.'}`
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

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        
        const googleResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: contentsParts }]
            })
        });

        const data = await googleResponse.json();

        if (!googleResponse.ok) {
            return new Response(JSON.stringify({ reply: "Google Mesajı: " + (data.error?.message || "Bilinmiyor") }), { status: 500, headers });
        }

        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap yok.";
        
        return new Response(JSON.stringify({ reply: replyText }), { status: 200, headers });

    } catch (error) {
        return new Response(JSON.stringify({ reply: "Sunucu hatası: " + error.message }), { status: 500, headers });
    }
}
