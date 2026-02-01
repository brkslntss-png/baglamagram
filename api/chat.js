// api/chat.js - DEDEKTİF MODU (LİSTELEME)
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ reply: "API Anahtarı Yok!" }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  }

  // SOHBET ETMİYORUZ, LİSTE İSTİYORUZ
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

  try {
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ 
        reply: "HATA: " + JSON.stringify(data, null, 2) 
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // Sadece mesaj üretebilen modelleri filtrele
    const models = data.models
      ?.filter(m => m.supportedGenerationMethods.includes("generateContent"))
      .map(m => m.name) // Örn: models/gemini-pro
      .join("\n");

    return new Response(JSON.stringify({ 
      reply: models ? "İŞTE SENİN LİSTEN:\n" + models : "LİSTE BOŞ! (Google AI Studio'da API kapalı olabilir)" 
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    return new Response(JSON.stringify({ reply: "Bağlantı Hatası: " + error.message }), { 
      status: 200, headers: { 'Content-Type': 'application/json' } 
    });
  }
}
