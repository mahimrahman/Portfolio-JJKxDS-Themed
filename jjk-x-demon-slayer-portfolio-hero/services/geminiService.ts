
import { GoogleGenAI, Type } from "@google/genai";
import { ThemeMode, HeroContent } from "../types";
import { THEME_CONFIGS } from "../constants";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const generateHeroContent = async (theme: ThemeMode, retryCount = 0): Promise<HeroContent> => {
  const char = THEME_CONFIGS[theme];
  // Re-initialize to ensure we use the freshest API key available in the environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Create professional portfolio content for Mahimur Rahman Khan, a Software Engineer, UI/UX Designer, and Business Analyst.
  Current Theme: Anime crossover with ${char.name} (from JJK or Demon Slayer).
  Current Role Focus: ${char.professionalRole}.
  
  Generate:
  1. professionalTitle: A high-impact title blending ${char.professionalRole} with ${char.name}'s powers (max 5 words).
  2. techniqueSummary: A professional summary of how he works (max 20 words).
  3. actionCall: A short CTA button text.
  4. kanjiTitle: 2-3 Japanese characters that fit the vibe.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            professionalTitle: { type: Type.STRING },
            techniqueSummary: { type: Type.STRING },
            actionCall: { type: Type.STRING },
            kanjiTitle: { type: Type.STRING },
          },
          required: ["professionalTitle", "techniqueSummary", "actionCall", "kanjiTitle"],
        },
      },
    });

    const data = JSON.parse(response.text || "{}");
    return {
      professionalTitle: data.professionalTitle || `${char.professionalRole.toUpperCase()} // ${char.name}`,
      techniqueSummary: data.techniqueSummary || char.description,
      actionCall: data.actionCall || "EXPAND DOMAIN",
      kanjiTitle: data.kanjiTitle || char.kanji
    };
  } catch (error: any) {
    // Handle Quota Exhausted (429) with a retry or immediate fallback
    if (error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
      if (retryCount < 1) {
        await delay(2000); // Wait 2 seconds before one final retry
        return generateHeroContent(theme, retryCount + 1);
      }
      console.warn("Gemini Quota Exhausted. Using local high-quality fallbacks.");
    } else {
      console.error("Gemini API Error:", error);
    }

    // High-quality local fallbacks based on character lore
    const fallbacks: Record<ThemeMode, HeroContent> = {
      [ThemeMode.YUJI]: {
        professionalTitle: "Divergent System Architect",
        techniqueSummary: "Executing double-impact code deployments with raw structural integrity and cursed optimization.",
        actionCall: "BLACK FLASH DEPLOY",
        kanjiTitle: "呪胎"
      },
      [ThemeMode.GOJO]: {
        professionalTitle: "Infinite UX Architect",
        techniqueSummary: "Visualizing user flows with Six-Eyes precision to create untouchable, frictionless digital domains.",
        actionCall: "EXPAND VOID",
        kanjiTitle: "無量"
      },
      [ThemeMode.TANJIRO]: {
        professionalTitle: "Sun-Breathing Analyst",
        techniqueSummary: "Tracing the opening thread in complex datasets to strike at the heart of business challenges.",
        actionCall: "HINOKAMI STRATEGY",
        kanjiTitle: "神楽"
      },
      [ThemeMode.ZENITSU]: {
        professionalTitle: "Thunder-Fast Optimizer",
        techniqueSummary: "Single-fold execution of low-latency solutions that strike with instantaneous performance gains.",
        actionCall: "GOD SPEED SYNC",
        kanjiTitle: "雷鳴"
      },
      [ThemeMode.INOSUKE]: {
        professionalTitle: "Beast-Mode Innovator",
        techniqueSummary: "Charging through technical debt with wild creative instinct and multi-spatial problem solving.",
        actionCall: "ASSAULT SPRINT",
        kanjiTitle: "突進"
      }
    };

    return fallbacks[theme];
  }
};
