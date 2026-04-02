import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
  const body = await request.json();

  const { description, imageBase64 } = body;

  console.log(body);

  const prompt = `You are a nutrition expert. Based on the food description and/or image provided, estimate the calories and macros.
Return ONLY a JSON object in this exact format, no other text:
{
  "name": "food name",
  "calories": 000,
  "protein": 00,
  "carbs": 00,
  "fat": 00
}`;
  const parts: (string | { inlineData: { mimeType: string; data: string } })[] =
    [prompt, description];

  if (imageBase64) {
    parts.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: imageBase64.split(",")[1],
      },
    });
  }

  const result = await model.generateContent(parts);

  const text = result.response.text();
  const nutrition = JSON.parse(text);

  return NextResponse.json(nutrition);
}
