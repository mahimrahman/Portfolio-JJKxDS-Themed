import React from 'react';

export enum ThemeMode {
  YUJI = 'YUJI',
  GOJO = 'GOJO',
  TANJIRO = 'TANJIRO',
  ZENITSU = 'ZENITSU',
  INOSUKE = 'INOSUKE'
}

interface CharacterConfig {
  name: string;
  professionalRole: string;
  color: string;
  accent: string;
  kanji: string;
  techniqueName: string;
  description: string;
}

const THEME_CONFIGS: Record<ThemeMode, CharacterConfig> = {
  [ThemeMode.YUJI]: {
    name: "YUJI",
    professionalRole: "SOFTWARE ENGINEER",
    color: "from-[#F5A7B8] via-[#B22222] to-[#1B263B]",
    accent: "#F5A7B8",
    kanji: "呪力",
    techniqueName: "Divergent Implementation",
    description: "Building robust, high-impact systems with raw architectural strength."
  },
  [ThemeMode.GOJO]: {
    name: "GOJO",
    professionalRole: "UI/UX DESIGNER",
    color: "from-[#1A1A1A] via-[#F2F2F2] to-[#A1C4FD]",
    accent: "#A1C4FD",
    kanji: "六眼",
    techniqueName: "Infinite Clarity Design",
    description: "Applying the 'Six Eyes' to design for flawless user perception and flow."
  },
  [ThemeMode.TANJIRO]: {
    name: "TANJIRO",
    professionalRole: "BUSINESS ANALYST",
    color: "from-[#00A19D] via-[#2B2B2B] to-[#8B0000]",
    accent: "#00A19D",
    kanji: "全集中",
    techniqueName: "Market Breathing",
    description: "Sensing the 'opening thread' in complex market data and strategies."
  },
  [ThemeMode.ZENITSU]: {
    name: "ZENITSU",
    professionalRole: "PERFORMANCE OPTIMIZATION",
    color: "from-[#FFD700] via-[#FF8C00] to-[#FDF5E6]",
    accent: "#FFD700",
    kanji: "霹靂一閃",
    techniqueName: "Thunder-Fast Deployment",
    description: "Executing precise, low-latency solutions with lightning speed."
  },
  [ThemeMode.INOSUKE]: {
    name: "INOSUKE",
    professionalRole: "CREATIVE TECHNOLOGIST",
    color: "from-[#3F51B5] via-[#5D4037] to-[#E0AC69]",
    accent: "#3F51B5",
    kanji: "突撃",
    techniqueName: "Beast Mode Innovation",
    description: "Attacking problems from unexpected angles with wild creativity."
  }
};

interface VisualEffectsProps {
  theme: ThemeMode;
}

const VisualEffects: React.FC<VisualEffectsProps> = ({ theme }) => {
  const config = THEME_CONFIGS[theme];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Background Panels */}
      <div
        className="absolute inset-0 transition-colors duration-1000 opacity-20"
        style={{ backgroundColor: '#050505' }}
      />

      {/* Halftone Texture Overlay */}
      <div
        className="absolute inset-0 halftone opacity-10 transition-opacity duration-1000"
        style={{
          backgroundColor: config.accent,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Action Lines Background */}
      <div className="absolute inset-0 action-lines opacity-40" />

      {/* The "Domain" Glow */}
      <div
        className="absolute bottom-0 right-0 w-[80vw] h-[80vw] rounded-full blur-[150px] transition-all duration-1000 opacity-30"
        style={{
          background: `radial-gradient(circle, ${config.accent} 0%, transparent 70%)`,
          transform: 'translate(20%, 20%)'
        }}
      />

      {/* Tanjiro's Checkerboard Pattern (Subtle for his theme) */}
      {theme === ThemeMode.TANJIRO && (
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(45deg, #00A19D 25%, transparent 25%),
                          linear-gradient(-45deg, #00A19D 25%, transparent 25%),
                          linear-gradient(45deg, transparent 75%, #00A19D 75%),
                          linear-gradient(-45deg, transparent 75%, #00A19D 75%)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 0 50px, 50px 50px, 50px 0'
        }} />
      )}

      {/* Gojo's Blindfold/Infinity High-Contrast Streaks */}
      {theme === ThemeMode.GOJO && (
        <div className="absolute inset-0 flex flex-col justify-around opacity-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-[2px] w-full bg-white shadow-[0_0_20px_white] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      )}

      {/* Zenitsu's Lightning Flicker */}
      {theme === ThemeMode.ZENITSU && (
        <div className="absolute inset-0 bg-white/5 animate-flicker pointer-events-none" />
      )}

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          5%, 7% { opacity: 1; }
          8%, 12% { opacity: 0; }
          13% { opacity: 0.8; }
          14% { opacity: 0; }
        }
        .animate-flicker { animation: flicker 4s infinite; }

        .halftone {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 4px 4px;
        }

        .action-lines {
          background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.03) 10px,
            rgba(255, 255, 255, 0.03) 11px
          );
        }
      `}</style>
    </div>
  );
};

export default VisualEffects;
