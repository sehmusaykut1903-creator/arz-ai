export default async function handler(req, res) {
  try {
    const { message } = req.body;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const cevap =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Cevap üretilemedi.";

    res.status(200).json({ answer: cevap });

  } catch (error) {
    res.status(500).json({ error: "Hata oluştu" });
  }
}
