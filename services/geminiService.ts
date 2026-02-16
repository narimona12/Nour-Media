
import { GoogleGenAI } from "@google/genai";

export async function getBusinessStrategy(prompt: string, language: string) {
  // Defensive check for the existence of the API key environment variable
  const key = typeof process !== 'undefined' ? process.env.API_KEY : null;
  
  if (!key) {
    console.error("NOUR MEDIA: API_KEY is missing from environment variables.");
    return "Error: Internal protocol failure (API_KEY_NULL). Please ensure environment variables are configured on Vercel.";
  }

  const ai = new GoogleGenAI({ apiKey: key });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are a high-end digital agency consultant for NOUR MEDIA. 
    You help clients with digital transformation, web development, business automation, and sales funnels.
    Give a concise, futuristic, and actionable business strategy based on their query.
    Keep the tone professional, minimalist, and forward-thinking.
    Respond strictly in ${language}.
  `;

  try {
    console.log("NOUR MEDIA: Contacting Gemini core...");
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    if (!response || !response.text) {
      throw new Error("Empty response from AI core.");
    }

    return response.text;
  } catch (error: any) {
    console.error("NOUR MEDIA API Error:", error);
    // Specific error handling for common Vercel/API issues
    if (error.message?.includes("404")) return "Error: Model not found in this region.";
    if (error.message?.includes("401")) return "Error: Unauthorized access (Invalid API Key).";
    return `Critical connectivity error: ${error.message || "Unknown Failure"}`;
  }
}
