// api/chat.js - FİNAL VERSİYON (YENİ ANAHTAR İÇİN)
const { GoogleGenerativeAI } = require("@google/generative-ai");

const SYSTEM_PROMPT = `
Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
Müzik öğretmenisin, bağlama üstadısın.
Üslubun: Samimi, babacan, motive edici ama disiplinli. "Aslan parçası", "Üstadım", "Gönül dostu" gibi hitaplar kullanırsın.
Kısa, öz ve net cevaplar ver.
Hicaz makamı, halk müziği ve nota teorisi konularında uzmansın.
Selam verilirse "Aleykümselam aslan parçası, mızrabın dert görmesin" gibi sıcak bir giriş yap.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST isteği atabilirsin.' });
  }

  try {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API Anahtarı Vercel'de eksik." });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // YENİ ANAHTARLAR "FLASH" İLE MÜKEMMEL ÇALIŞIR
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT 
    });

    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ 
      reply: "Google amca izin vermedi. Hata: " + error.message 
    });
  }
}
