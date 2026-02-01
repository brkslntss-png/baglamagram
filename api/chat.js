// api/chat.js - MANUEL BAĞLANTI (KÜTÜPHANESİZ VERSİYON)
export const config = {
  runtime: 'edge', // En hızlı çalışma modu
};

export default async function handler(req) {
  // Sadece POST isteği
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Sadece POST atabilirsin.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Mesajı al
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ reply: "API Anahtarı eksik." }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // BURAK HOCA KİŞİLİĞİ
    const systemPrompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      Üslubun: Samimi, babacan, motive edici ama disiplinli. "Aslan parçası", "Üstadım" gibi hitaplar kullanırsın.
      Kısa ve öz cevaplar ver.
    `;

    // GOOGLE'A DİREKT İSTEK AT (Kütüphane Yok!)
    // Model: gemini-1.5-flash (En yenisi ve hızlısı)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt + "\n\nÖğrencinin Mesajı: " + message }]
          }
        ]
      })
    });

    const data = await response.json();

    // Google'dan hata gelirse göster
    if (!response.ok) {
      console.error("Google Hatası:", data);
      return new Response(JSON.stringify({ reply: "Google amca kapıyı açmadı. Hata kodu: " + response.status }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Cevabı ayıkla
    const replyText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Sunucu Hatası:", error);
    return new Response(JSON.stringify({ reply: "Bağlantı koptu. Hata: " + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
