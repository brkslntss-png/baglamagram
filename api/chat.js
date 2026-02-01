// api/chat.js - ESNEK VE SAĞLAM MOTOR
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // 1. CORS AYARLARI (Herkes geçsin)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 2. Tarayıcı Kontrolü (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 3. Eğer tarayıcıdan direkt girersen (GET), "Yaşıyorum" desin.
  if (req.method === 'GET') {
    return res.status(200).json({ 
      durum: "Online", 
      mesaj: "BurakAI Hoca görevinin başında aslan parçası. Ama konuşmak için arayüzü kullanmalısın." 
    });
  }

  // 4. Sadece POST isteğini işleme al
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST isteği kabul edilir.' });
  }

  try {
    // Veriyi al (Vercel Node.js modunda req.body kullanılır)
    const { message, image } = req.body || {}; 
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "API Anahtarı eksik!" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        systemInstruction: {
            role: "system",
            parts: [{ text: `
                Sen "BurakAI Hoca"sın. Mahmut Burak Aslantaş'ın dijital ikizisin.
                Müzik öğretmenisin, bağlama üstadısın.
                Üslubun: Samimi, babacan, motive edici. "Aslan parçası", "Evladım", "Gönül dostu" gibi hitaplar kullan.
                Görevin: Gelen mesajı veya FOTOĞRAFI bir hoca gözüyle incele.
                Cevapların öğretici ve sıcak olsun. Asla yapay zeka olduğunu belli etme.
            `}]
        }
    });

    let parts = [];
    if (message) parts.push({ text: message });
    else parts.push({ text: "Hocam şu fotoğrafa bir bak." });

    if (image) {
      try {
        const base64Data = image.split(',')[1];
        const mimeType = image.split(';')[0].split(':')[1];
        parts.push({
          inlineData: { mimeType: mimeType, data: base64Data }
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
    return res.status(500).json({ reply: "Hata oluştu: " + error.message });
  }
}
