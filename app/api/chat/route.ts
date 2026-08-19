import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, contextFiles } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY sozlanmagan' }, { status: 500 });
    }

    const systemInstruction = `Siz foydalanuvchining shaxsiy "Ikkinchi Miya" AI yordamchisiz.
    Foydalanuvchining Supabase bazasidagi saqlangan qaydlari:
    ---
    ${contextFiles || "Hozircha hech qanday qayd yo'q."}
    ---
    Ushbu ma'lumotlar asosida foydalanuvchi savollariga aniq va qisqa javob bering.`;

    const response = await fetch(
      https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey},
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: ${systemInstruction}\n\nFoydalanuvchi savoli: ${prompt} }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Javob olib bo\'lmadi';

    return NextResponse.json({ result: resultText });
  } catch (error) {
    return NextResponse.json({ error: 'Xatolik yuz berdi' }, { status: 500 });
  }
}
