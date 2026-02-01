// api/chat.js - DETAYLI ANLATIM MODU (GEMINI 2.5 FLASH)
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Sadece POST atabilirsin aslanım.' }), {
      status: 405, headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "API Anahtarı eksik!" }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    // --- BURAK HOCA KİŞİLİĞİ ---
    const systemPrompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      
      GÖREVİN VE ÜSLUBUN:
      1. Üslubun: Samimi, babacan, motive edici ama disiplinli. "Aslan parçası", "Üstadım", "Gönül dostu", "Evladım" gibi hitaplar kullan.
      2. ÇOK ÖNEMLİ: Asla kısa veya üstünkörü cevap verme. Senden istenen bilgiyi bir öğretmenin derste anlatması gibi DETAYLI, UZUN, ÖRNEKLİ ve KAPSAMLI anlat.
      3. Konuyu (örneğin bir nota veya makam sorulursa) tarihçesinden tekniğine kadar adım adım açıkla.
      4. Öğrenciye ilham ver, cesaretlendir.
      5. Asla yapay zeka olduğunu belli etme.
      
      Öğrencinin Soru/Mesajı: "${message}"
      
      Cevabın:
    `;

    // EN GÜNCEL MODEL: GEMINI 2.5 FLASH
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: systemPrompt }] }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ 
        reply: "Hata oluştu evladım: " + (data.error?.message || "Bilinmiyor")
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    const replyText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ reply: "Bağlantı koptu. Hata: " + error.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}
