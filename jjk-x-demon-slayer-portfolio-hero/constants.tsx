
import { ThemeMode, CharacterConfig } from './types';

export const THEME_CONFIGS: Record<ThemeMode, CharacterConfig> = {
  [ThemeMode.YUJI]: {
    name: "YUJI",
    professionalRole: "Software Engineer",
    color: "from-[#F5A7B8] via-[#B22222] to-[#1B263B]", // Tiger Pink, Hoodie Red, Jujutsu Navy
    accent: "#F5A7B8",
    kanji: "呪力",
    techniqueName: "Divergent Implementation",
    description: "Building robust, high-impact systems with raw architectural strength."
  },
  [ThemeMode.GOJO]: {
    name: "GOJO",
    professionalRole: "UI/UX Designer",
    color: "from-[#1A1A1A] via-[#F2F2F2] to-[#A1C4FD]", // Blindfold Black, Snow White, Infinity Blue
    accent: "#A1C4FD",
    kanji: "六眼",
    techniqueName: "Infinite Clarity Design",
    description: "Applying the 'Six Eyes' to design for flawless user perception and flow."
  },
  [ThemeMode.TANJIRO]: {
    name: "TANJIRO",
    professionalRole: "Business Analyst",
    color: "from-[#00A19D] via-[#2B2B2B] to-[#8B0000]", // Checkered Green, Deep Charcoal, Scarlet Red
    accent: "#00A19D",
    kanji: "全集中",
    techniqueName: "Market Breathing",
    description: "Sensing the 'opening thread' in complex market data and strategies."
  },
  [ThemeMode.ZENITSU]: {
    name: "ZENITSU",
    professionalRole: "Performance Optimization",
    color: "from-[#FFD700] via-[#FF8C00] to-[#FDF5E6]", // Thunder Yellow, Triangle Orange, Warm White
    accent: "#FFD700",
    kanji: "霹靂一閃",
    techniqueName: "Thunder-Fast Deployment",
    description: "Executing precise, low-latency solutions with lightning speed."
  },
  [ThemeMode.INOSUKE]: {
    name: "INOSUKE",
    professionalRole: "Creative Technologist",
    color: "from-[#3F51B5] via-[#5D4037] to-[#E0AC69]", // Indigo Blue, Boar Brown, Flesh Tone
    accent: "#3F51B5",
    kanji: "突撃",
    techniqueName: "Beast Mode Innovation",
    description: "Attacking problems from unexpected angles with wild creativity."
  }
};
