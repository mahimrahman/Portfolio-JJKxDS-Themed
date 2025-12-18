import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Layout,
  BarChart3,
  ArrowRight,
  Sparkles,
  Zap,
  Swords,
  Shield,
  User
} from 'lucide-react';
import VisualEffects from './VisualEffects';
import SectionMerge from './SectionMerge';

// Types
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

interface HeroContent {
  professionalTitle: string;
  actionCall: string;
}

// Theme Configurations
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

// Fallback content for each theme
const FALLBACK_CONTENT: Record<ThemeMode, HeroContent> = {
  [ThemeMode.YUJI]: {
    professionalTitle: "DIVERGENT SYSTEM ARCHITECT",
    actionCall: "BLACK FLASH DEPLOY"
  },
  [ThemeMode.GOJO]: {
    professionalTitle: "INFINITE UX ARCHITECT",
    actionCall: "EXPAND VOID"
  },
  [ThemeMode.TANJIRO]: {
    professionalTitle: "SUN-BREATHING ANALYST",
    actionCall: "HINOKAMI STRATEGY"
  },
  [ThemeMode.ZENITSU]: {
    professionalTitle: "THUNDER-FAST OPTIMIZER",
    actionCall: "GOD SPEED SYNC"
  },
  [ThemeMode.INOSUKE]: {
    professionalTitle: "BEAST-MODE INNOVATOR",
    actionCall: "ASSAULT SPRINT"
  }
};

const Hero: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeMode>(ThemeMode.TANJIRO);
  const [content, setContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load fallback content for the selected theme
    setLoading(true);
    setTimeout(() => {
      setContent(FALLBACK_CONTENT[activeTheme]);
      setLoading(false);
    }, 300);
  }, [activeTheme]);

  const currentConfig = THEME_CONFIGS[activeTheme];

  const characterOptions = [
    { mode: ThemeMode.YUJI, icon: <Shield />, label: "DEV" },
    { mode: ThemeMode.GOJO, icon: <Sparkles />, label: "UX" },
    { mode: ThemeMode.TANJIRO, icon: <Swords />, label: "BIZ" },
    { mode: ThemeMode.ZENITSU, icon: <Zap />, label: "OPT" },
    { mode: ThemeMode.INOSUKE, icon: <User />, label: "CRT" },
  ];

  const roles = [
    { label: "SOFTWARE ENGINEER", icon: <Code2 size={14} /> },
    { label: "UI/UX DESIGNER", icon: <Layout size={14} /> },
    { label: "BUSINESS ANALYST", icon: <BarChart3 size={14} /> }
  ];

  return (
    <div className="relative min-h-screen w-screen flex flex-col bg-[#030303] overflow-x-hidden overflow-y-auto lg:overflow-hidden">
      {/* Subtle Section Merge Overlay - bottom only for Hero */}
      <SectionMerge position="bottom" intensity="light" />

      <VisualEffects theme={activeTheme} />


      {/* Vertical Role Strips (Desktop Only) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-12 z-20">
        {roles.map((role, i) => (
          <div key={i} className="flex items-center space-x-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            <span className={`text-[10px] font-black tracking-[0.5em] transition-colors duration-500 uppercase ${currentConfig.professionalRole === role.label ? 'text-white shadow-[0_0_10px_white]' : 'text-white/20'}`}>
              {role.label}
            </span>
            <div className={`w-px h-12 transition-colors duration-500 ${currentConfig.professionalRole === role.label ? 'bg-white shadow-[0_0_10px_white]' : 'bg-white/10'}`} />
          </div>
        ))}
      </div>

      <main className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 pt-24 pb-32 lg:py-0 gap-10 lg:gap-20 max-w-7xl mx-auto w-full">

        {/* Left: Identity Section */}
        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative mb-4 lg:mb-6">
            <div className="px-4 py-1 border-l-4 lg:border-l-4 font-bold text-[8px] lg:text-[10px] tracking-[0.4em] lg:tracking-[0.5em] uppercase opacity-60 flex items-center space-x-3" style={{ borderColor: currentConfig.accent }}>
              <span>DOMAIN PROTOCOL // {activeTheme}</span>
            </div>
          </div>

          {/* Name Logo */}
          <div className="relative group w-fit">
            <div
              className="absolute -inset-8 lg:-inset-12 blur-[60px] lg:blur-[100px] opacity-10 transition-all duration-1000 group-hover:opacity-20"
              style={{ backgroundColor: currentConfig.accent }}
            />

            <h1 className="text-4xl md:text-5xl lg:text-[7rem] font-light leading-[0.85] lg:leading-[0.75] tracking-tight select-none relative transition-all duration-500">
              <span className="block text-white mix-blend-difference font-extralight">MAHIMUR</span>
              <span className="block stroke-text text-transparent font-extralight" style={{ WebkitTextStroke: `1px ${currentConfig.accent}44` }}>RAHMAN</span>
              <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${currentConfig.color} animate-gradient-flow font-light`}>
                KHAN
              </span>
            </h1>
          </div>

          {/* Role Badges (Mobile Only) */}
          <div className="flex lg:hidden flex-wrap justify-center gap-2 mt-6">
            {roles.map((role, i) => (
              <div
                key={i}
                className={`px-3 py-1.5 border text-[8px] font-black tracking-widest rounded-sm transition-all duration-500 ${currentConfig.professionalRole === role.label ? 'bg-white text-black border-white' : 'text-white/30 border-white/10'}`}
              >
                {role.label}
              </div>
            ))}
          </div>

          {/* Technique Section */}
          <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 items-center">
            <div className="font-jp text-5xl lg:text-7xl text-white/5 select-none hover:text-white/10 transition-colors cursor-default">
              {currentConfig.kanji}
            </div>
            <div className="lg:max-w-xs lg:border-l border-white/10 lg:pl-6 text-center lg:text-left">
              <div className="text-[8px] lg:text-[10px] font-black tracking-[0.3em] text-white/40 uppercase mb-1">Special Grade Technique</div>
              <div className="text-lg lg:text-2xl font-anime tracking-wider transition-colors duration-500" style={{ color: currentConfig.accent }}>
                {currentConfig.techniqueName}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Manga Panel (Video) */}
        <div className="relative w-full max-w-[400px] md:max-w-lg lg:max-w-2xl group">
          <div
            className="relative z-10 bg-black p-3 lg:p-4 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2"
            style={{
              border: `6px solid white`,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: '6px',
              boxShadow: `12px 12px 0px ${currentConfig.accent}44`,
            }}
          >
            <div className="relative aspect-square bg-neutral-900 overflow-hidden group/video">
              <video
                ref={videoRef}
                key={activeTheme}
                autoPlay muted loop playsInline
                className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity duration-700"
                src="/1.mp4"
              />

              <div className="absolute inset-0 border-[12px] lg:border-[20px] border-black/20 pointer-events-none" />

              {/* Internal HUD */}
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex flex-col space-y-1 bg-black/40 p-1.5 lg:p-2 backdrop-blur-sm">
                <div className="text-[7px] lg:text-[8px] font-mono text-white/40 tracking-widest uppercase">SYNC_ID</div>
                <div className="text-[8px] lg:text-[10px] font-black text-white tracking-widest">{activeTheme}_v01</div>
              </div>

              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 font-jp text-2xl lg:text-4xl text-white/20 select-none">
                {currentConfig.kanji}
              </div>
            </div>

            {/* Content & Action */}
            <div className="mt-6 lg:mt-8 flex flex-col space-y-4 lg:space-y-6 px-1 lg:px-2 pb-2">
              <h2 className={`text-xl lg:text-3xl font-black tracking-tighter uppercase italic leading-none transition-all duration-700 ${loading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {content?.professionalTitle || "INITIATING DOMAIN"}
              </h2>

              <button className="relative w-full py-4 lg:py-6 group/btn overflow-hidden bg-white text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <div
                  className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"
                  style={{ background: `linear-gradient(to right, ${currentConfig.accent}, white)` }}
                />
                <div className="relative flex items-center justify-center space-x-4 lg:space-x-6 text-[10px] lg:text-xs font-black tracking-[0.5em] lg:tracking-[0.7em] uppercase">
                  <span>{content?.actionCall || "EXPAND DOMAIN"}</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-8 -right-8 lg:-top-12 lg:-right-12 w-32 h-32 lg:w-48 lg:h-48 halftone opacity-10 -z-10 animate-pulse" style={{ backgroundColor: currentConfig.accent }} />
        </div>
      </main>

      {/* Footer Dock */}
      <div className="fixed bottom-0 left-0 w-full z-40 px-4 pb-4 lg:pb-12 pointer-events-none">
        <div className="max-w-xl mx-auto flex flex-col items-center pointer-events-auto">
          <div className="flex w-full lg:w-auto overflow-x-auto lg:overflow-visible no-scrollbar bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 p-2 rounded-2xl lg:rounded-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex min-w-full lg:min-w-0 items-center justify-center space-x-1 lg:space-x-2">
              {characterOptions.map((opt) => (
                <button
                  key={opt.mode}
                  onClick={() => setActiveTheme(opt.mode)}
                  className={`group relative flex-shrink-0 w-14 h-14 lg:w-20 lg:h-20 flex flex-col items-center justify-center rounded-xl lg:rounded-[1.8rem] transition-all duration-500 ${
                    activeTheme === opt.mode
                    ? 'bg-white text-black scale-105 lg:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                    : 'text-white/20 hover:text-white/60 hover:bg-white/5'
                  }`}
                >
                  <div className={`mb-0.5 transition-transform duration-500 ${activeTheme === opt.mode ? 'scale-110' : ''}`}>
                    {React.cloneElement(opt.icon as React.ReactElement<any>, { size: 18 })}
                  </div>
                  <span className="text-[6px] lg:text-[7px] font-black tracking-[0.1em]">{opt.label}</span>

                  {activeTheme === opt.mode && (
                    <div className="absolute -top-10 lg:-top-14 flex flex-col items-center animate-bounce-slow">
                      <div className="px-3 lg:px-4 py-0.5 lg:py-1 bg-white text-black text-[7px] lg:text-[9px] font-black rounded-full shadow-xl tracking-widest uppercase">
                        {opt.mode}
                      </div>
                      <div className="w-px h-3 lg:h-4 bg-white/40 mt-1" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: flow 18s ease infinite;
        }
        .stroke-text {
          -webkit-text-fill-color: transparent;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.5s infinite ease-in-out; }

        .font-jp {
          font-family: 'Noto Sans JP', sans-serif;
        }

        .font-anime {
          font-family: 'Bangers', cursive;
          letter-spacing: 0.05em;
        }

        .halftone {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 8px 8px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
