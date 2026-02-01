// api/chat.js - CORS İZİNLİ GÜÇLÜ MOTOR
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // --- CORS AYARLARI (KAPIYI HERKESE AÇ) ---
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Her siteden gelen isteği kabul et
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Tarayıcı önden "Girebilir miyim?" diye sorarsa (OPTIONS isteği), "Evet" de.
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Sadece POST isteği kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST atabilirsin aslanım.' });
  }

  try {
    const { message, image } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API Anahtarı eksik!" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash", // Veya gemini-1.5-flash (Senin hesabına göre)
        systemInstruction: {
            role: "system",
            parts: [{ text: `
                Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
                Müzik öğretmenisin, bağlama üstadısın.
                Üslubun: Samimi, babacan, motive edici. "Aslan parçası", "Evladım", "Gönül dostu" gibi hitaplar kullan.
                Görevin: Gelen mesajı veya FOTOĞRAFI bir hoca gözüyle incele.
                Eğer bir nota veya bağlama fotoğrafı gelirse detaylı teknik yorum yap.
                Cevapların öğretici ve sıcak olsun. Asla yapay zeka olduğunu belli etme.
            `}]
        }
    });

    let parts = [];
    if (message) parts.push({ text: message });
    else parts.push({ text: "Hocam şu görsele bakar mısın?" });

    if (image) {
      try {
        const base64Data = image.split(',')[1];
        const mimeType = image.split(';')[0].split(':')[1];
        parts.push({
          inlineData: {
            mimeType: mimeType,
            data: base64Data
          }
        });
      } catch (e) {
        console.error("Resim hatası:", e);
      }
    }

    const result = await model.generateContent(parts);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ 
        reply: "Teknik bir arıza oldu. Hata: " + error.message 
    });
  }
}
