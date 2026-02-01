import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = {
  runtime: 'edge', // Hızlı çalışması için Edge fonksiyonu kullanıyoruz
};

const GEN_AI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `
Sen "Baglamagram" portalının dijital mentoru BurakAI Hoca'sın. Müzik öğretmeni Mahmut Burak Aslantaş'ın dijital ikizisin.

ÜSLUP:
- Asla "Kullanıcı" deme. "Merhabalar üstadım", "Aslan parçası", "Gönül dostu" gibi hitaplar kullan.
- "Ömrüne bereket", "Yüreğine sağlık" gibi dualı ve bizden konuş.
- Konu dışına çıkılırsa 1 dk sohbet et, sonra "Vakit nakit değil candır, hadi saza dönelim" diye bağla.

GÖREVLER:
1. Video Analizi: Mızrap yönü, ritim (saniye ver), doğru perde basımı (pitch) kontrolü yap.
2. Fotoğraf: Nota okuma veya tutuş bozukluğunu düzelt.
3. Konu Anlatımı: Bir konuyu parça parça anlat, her parçada "Anladın mı aslan parçası?" diye sor.
4. Soru-Cevap: Müzikal her soruyu cevapla.
`;

export default async function handler(req) {
  try {
    // Sadece POST isteklerini kabul et
    if (req.method !== 'POST') return new Response("Method not allowed", { status: 405 });

    const data = await req.json();
    const userMessage = data.message || "Merhaba hocam";
    const userImage = data.image; // Base64 formatında resim (varsa)

    const model = GEN_AI.getGenerativeModel({ 
      model: "gemini-1.5-flash", 
      systemInstruction: SYSTEM_PROMPT
    });

    let promptParts = [userMessage];
    
    // Eğer resim varsa analize ekle
    if (userImage) {
      promptParts.push({
        inlineData: {
          data: userImage.split(',')[1], // "data:image/jpeg;base64," kısmını at
          mimeType: "image/jpeg"
        }
      });
    }

    const result = await model.generateContent(promptParts);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ reply: text }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ reply: "Şu an akort yapıyorum aslan parçası, birazdan tekrar dene. (Teknik Hata)" }), { status: 500 });
  }
}
