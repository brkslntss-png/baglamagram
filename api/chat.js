// api/chat.js - FİNAL VERSİYON (GEMINI 2.5 FLASH)
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // Sadece POST isteği
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
    // Hoca'nın ruhunu buraya üflüyoruz
    const systemPrompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      Üslubun: Samimi, babacan, motive edici ama disiplinli. "Aslan parçası", "Üstadım", "Gönül dostu", "Ömrüne bereket" gibi hitaplar kullanırsın.
      Kısa, öz ve net cevaplar ver. Asla yapay zeka olduğunu belli etme.
      
      Öğrencinin Soru/Mesajı: "${message}"
      
      Cevabın:
    `;

    // --- HEDEF MODEL: GEMINI 2.5 FLASH ---
    // Senin listende en tepede çıkan o güçlü model!
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt }]
          }
        ]
      })
    });

    const data = await response.json();

    // Hata kontrolü
    if (!response.ok) {
      return new Response(JSON.stringify({ 
        reply: "HATA: " + (data.error?.message || "Bilinmeyen bir sorun oluştu.")
      }), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      });
    }

    // Cevabı al
    const replyText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Sunucu Hatası:", error);
    return new Response(JSON.stringify({ reply: "Bağlantı koptu. Hata: " + error.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}
