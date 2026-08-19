import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(req: Request) {
  try {
    const { prompt, contextFiles } = await req.json();

    const systemInstruction = `Siz foydalanuvchining shaxsiy "Ikkinchi Miya" AI yordamchisiz.
    Foydalanuvchining Supabase bazasidagi saqlangan qaydlari:
    ---
    ${contextFiles || "Hozircha hech qanday qayd yo'q."}
    ---
    Ushbu ma'lumotlar asosida foydalanuvchi savollariga aniq va qisqa javob bering.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return NextResponse.json({ result: response.text });
  } catch (error) {
    return NextResponse.json({ error: 'Xatolik yuz berdi' }, { status: 500 });
  }
}
