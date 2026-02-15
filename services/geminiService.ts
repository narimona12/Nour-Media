
import { GoogleGenAI } from "@google/genai";

export async function getBusinessStrategy(prompt: string, language: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are a high-end digital agency consultant for NOUR MEDIA. 
    You help clients with digital transformation, web development, business automation, and sales funnels.
    Give a concise, futuristic, and actionable business strategy based on their query.
    Keep the tone professional, minimalist, and forward-thinking.
    Respond in ${language}.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Unable to compute strategy at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the neural network. Please try again.";
  }
}
