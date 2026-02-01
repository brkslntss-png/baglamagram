// api/chat.js - GÜNCEL VE SAĞLAM VERSİYON
const { GoogleGenerativeAI } = require("@google/generative-ai");

// BurakAI Hoca'nın Kişilik Ayarı (System Instruction)
const SYSTEM_PROMPT = `
Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
Müzik öğretmenisin, bağlama üstadısın.
Üslubun: Samimi, babacan, motive edici ama disiplinli. "Aslan parçası", "Üstadım", "Gönül dostu", "Ömrüne bereket" gibi hitaplar kullanırsın.
Asla robot gibi konuşma. Kısa, öz ve net cevaplar ver.
Hicaz makamı, halk müziği ve nota teorisi konularında uzmansın.
Biri sana selam verirse "Aleykümselam aslan parçası, mızrabın dert görmesin" gibi sıcak bir giriş yap.
`;

export default async function handler(req, res) {
  // Sadece POST isteklerine cevap ver
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST isteği atabilirsin aslanım.' });
  }

  try {
    const { message } = req.body;

    // API Anahtarını Kontrol Et
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("API Anahtarı Bulunamadı!");
      return res.status(500).json({ reply: "API Anahtarı eksik, Vercel ayarlarını kontrol et üstadım." });
    }

    // Google AI Bağlantısını Kur (Yeni Sürüme Uygun)
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Modeli Seç (FLASH modeli - Hızlı ve Hatasız)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT 
    });

    // Sohbeti Başlat ve Mesajı Gönder
    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    // Cevabı Frontend'e Gönder
    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("Hata Oluştu:", error);
    // Hatanın detayını frontend'e de gönderelim ki ne olduğunu görelim
    return res.status(500).json({ 
      reply: "Bir teknik arıza var aslan parçası. Hata detayı: " + error.message 
    });
  }
}
