import React from 'react';
import { EducationEntry } from './types';

const WaterBreathingCrest: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round"/>
    <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 12"/>
    <path d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50Z" fill="#0c4a6e" />
    <path d="M50 40C48.067 40 46.5 41.567 46.5 43.5C46.5 45.433 48.067 47 50 47C55.5228 47 60 51.4772 60 57C60 62.5228 55.5228 67 50 67C44.4772 67 40 62.5228 40 57" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const FlameBreathingCrest: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
    <path d="M50 90C36.6667 76.6667 30 60 50 10C70 60 63.3333 76.6667 50 90Z" fill="#7f1d1d"/>
    <path d="M50 90C40 76.6667 35 65 50 20C65 65 60 76.6667 50 90" stroke="#fca5a5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 80C45 71.6667 42.5 65 50 40C57.5 65 55 71.6667 50 80" stroke="#facc15" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const EDUCATION_DATA: EducationEntry[] = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    technique: "First Form: Water Surface Slash",
    institution: "Tokyo Jujutsu High - Engineering Division",
    duration: "2018 - 2022",
    description: "Mastered the fundamental cursed techniques of software engineering, focusing on web development, data structures, and algorithms. Completed the Final Selection by defending a thesis on scalable systems.",
    theme: {
      pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/50 via-slate-900 to-slate-900",
      glowColor: "shadow-cyan-500/40",
      crest: <WaterBreathingCrest />
    }
  },
  {
    id: 2,
    degree: "Master of Science",
    technique: "Ninth Form: Rengoku",
    institution: "Kyoto Jujutsu High - AI Research Unit",
    duration: "2022 - 2024",
    description: "Honed my skills to a Hashira level in Artificial Intelligence and Machine Learning. Unleashed a domain expansion project on advanced generative models and their application in combatting special-grade curses.",
    theme: {
      pattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/50 via-slate-900 to-slate-900",
      glowColor: "shadow-red-500/40",
      crest: <FlameBreathingCrest />
    }
  }
];
