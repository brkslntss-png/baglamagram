// api/chat.js - TRUVA ATI VERSİYONU (HER KAPIYI AÇAR)
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
  // Sadece POST isteği kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST atabilirsin aslanım.' });
  }

  try {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API Anahtarı eksik üstadım." });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // MODELİ TEKRAR "FLASH" YAPIYORUZ (Çünkü senin sürümün bunu destekliyor ve en hızlısı bu)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // --- TRUVA ATI TAKTİĞİ ---
    // Hoca kişiliğini sistem ayarı olarak değil, mesajın parçası olarak gönderiyoruz.
    const prompt = `
      Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
      Müzik öğretmenisin, bağlama üstadısın.
      Üslubun: Samimi, babacan, motive edici ama disiplinli. "Aslan parçası", "Üstadım", "Gönül dostu", "Ömrüne bereket" gibi hitaplar kullanırsın.
      Kısa, öz ve net cevaplar ver. Asla yapay zeka olduğunu belli etme.
      
      Öğrencinin Soru/Mesajı: "${message}"
      
      Cevabın:
    `;

    // Sohbeti başlatma, tek atımlık mesaj gönder (Daha az hata verir)
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ 
      reply: "Bağlantı sorunu var. Hata: " + error.message 
    });
  }
}
