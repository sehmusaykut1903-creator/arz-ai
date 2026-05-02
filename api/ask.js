export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Sadece POST isteği desteklenir."
      });
    }

    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({
        error: "Mesaj boş olamaz."
      });
    }

    const prompt = `
Sen ARZ AI isimli afet yönetimi odaklı bir akıllı asistansın.

Proje:
ARZ - Afet Raporlama ve Zamanlama

Amaç:
Afet durumlarında raporlama, zamanlama, saha bildirimi, lojistik, halk sağlığı, klinik destek ve operasyonel karar desteği sağlamak.

Cevap verirken:
- Türkçe cevap ver.
- Afet yönetimi, halk sağlığı, lojistik ve klinik karar destek bakışıyla yanıtla.
- Gereksiz uzun yazma ama yüzeysel de kalma.
- Mümkünse maddeli ve uygulanabilir cevap ver.
- Tıbbi konularda kesin tanı koyma; profesyonel değerlendirme gerektiğini belirt.
- Acil durumda 112 / AFAD / yetkili birimlere başvurulması gerektiğini hatırlat.

Kullanıcının sorusu:
${message}
`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || "Gemini API hatası."
      });
    }

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Cevap alınamadı.";

    return res.status(200).json({ answer });

  } catch (error) {
    return res.status(500).json({
      error: "ARZ AI bağlantı hatası.",
      detail: error.message
    });
  }
}
