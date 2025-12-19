
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIThemedResponse = async (name: string, message: string, theme: 'JUJUTSU' | 'SLAYER') => {
  const systemInstruction = theme === 'JUJUTSU' 
    ? "You are a Grade 1 Sorcerer from Jujutsu Kaisen. A non-sorcerer has sent a message to your apprentice. Respond with high energy, using JJK terminology like 'Cursed Energy', 'Domain Expansion', and 'Shikigami'. Be intense but welcoming."
    : "You are a Kasugai Crow from Demon Slayer. You are delivering a message to a Hashira. Squawk and speak in short, urgent sentences. Mention 'Breathing Styles', 'Wisteria', and 'Demon Slaying Corps'.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Name: ${name}. User Message: ${message}. Generate a short acknowledgement receipt in your persona.`,
      config: {
        systemInstruction,
        temperature: 0.8,
      },
    });
    return response.text || "Message received in the Cursed Realm!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return theme === 'JUJUTSU' ? "Cursed energy interference... message delivered anyway!" : "CAW! CAW! Message delivered to the estate!";
  }
};
