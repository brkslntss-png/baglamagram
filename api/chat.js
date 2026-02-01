// api/chat.js - KÜTÜPHANE DESTEKLİ SAĞLAM MOTOR
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
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

    // Google Kütüphanesini Başlat
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // MODEL: GEMINI 2.5 FLASH (En hızlı ve güçlüsü)
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
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

    // Gönderilecek parçaları hazırla
    let parts = [];
    
    // Mesaj varsa ekle
    if (message) {
        parts.push({ text: message });
    } else {
        parts.push({ text: "Hocam şu fotoğrafa bir bakar mısın?" });
    }

    // Resim varsa ekle (Formatı ayarla)
    if (image) {
      try {
        // Base64 başlığını temizle (data:image/jpeg;base64, kısmını at)
        const base64Data = image.split(',')[1];
        const mimeType = image.split(';')[0].split(':')[1];
        
        parts.push({
          inlineData: {
            mimeType: mimeType,
            data: base64Data
          }
        });
      } catch (e) {
        console.error("Resim işleme hatası:", e);
      }
    }

    // Google'a Gönder
    const result = await model.generateContent(parts);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("Hata:", error);
    return res.status(500).json({ 
        reply: "Teknik bir arıza oldu aslan parçası. Hata detayı: " + error.message 
    });
  }
}
