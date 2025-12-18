
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeMode, HeroContent } from './types';
import { THEME_CONFIGS } from './constants';
import { generateHeroContent } from './services/geminiService';
import VisualEffects from './components/VisualEffects';
import { 
  Code2, 
  Layout, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  Zap,
  Swords,
  Shield,
  User,
  AlertCircle,
  Key
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeMode>(ThemeMode.GOJO);
  const [content, setContent] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [isQuotaLimited, setIsQuotaLimited] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const fetchContent = useCallback(async (mode: ThemeMode) => {
    setLoading(true);
    try {
      const result = await generateHeroContent(mode);
      setContent(result);
    } catch (e) {
      setIsQuotaLimited(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent(activeTheme);
  }, [activeTheme, fetchContent]);

  const handleKeySelection = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setIsQuotaLimited(false);
      fetchContent(activeTheme);
    }
  };

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
      <VisualEffects theme={activeTheme} />

      {/* Top Status Bar */}
      <div className="absolute top-4 lg:top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col lg:flex-row items-center gap-3 w-full px-6 lg:w-auto">
        <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full shadow-2xl">
          <div className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-yellow-400 animate-pulse' : 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'}`} />
          <span className="text-[8px] lg:text-[9px] font-black tracking-[0.3em] uppercase opacity-60 whitespace-nowrap">
            System Status: {loading ? 'Syncing' : 'Linked'}
          </span>
        </div>
        
        <button 
          onClick={handleKeySelection}
          className="group flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/5 px-4 py-1.5 rounded-full transition-all backdrop-blur-md"
        >
          <Key size={10} className="text-white/40 group-hover:text-white transition-colors" />
          <span className="text-[8px] lg:text-[9px] font-black tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors whitespace-nowrap">
            Personalize API
          </span>
        </button>
      </div>

      {/* Vertical Role Strips (Desktop Only) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-12 z-20">
        {roles.map((role, i) => (
          <div key={i} className="flex items-center space-x-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
            <span className={`text-[10px] font-black tracking-[0.5em] transition-colors duration-500 uppercase ${currentConfig.professionalRole === role.label ? 'text-white' : 'text-white/20'}`}>
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
            
            <h1 className="text-5xl md:text-7xl lg:text-[11rem] font-black leading-[0.85] lg:leading-[0.75] tracking-tighter select-none relative transition-all duration-500">
              <span className="block text-white mix-blend-difference">MAHIMUR</span>
              <span className="block stroke-text text-transparent" style={{ WebkitTextStroke: `1px ${currentConfig.accent}44` }}>RAHMAN</span>
              <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${currentConfig.color} animate-gradient-flow`}>
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
        <div className="relative w-full max-w-[340px] md:max-w-md lg:max-w-xl group">
          <div 
            className="relative z-10 bg-black p-3 lg:p-4 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2"
            style={{ 
              border: `6px lg:border-8 solid white`,
              borderStyle: 'solid',
              borderColor: 'white',
              borderWidth: '6px',
              boxShadow: `12px 12px 0px ${currentConfig.accent}44`,
              filter: 'url(#inkBleed)'
            }}
          >
            <div className="relative aspect-square bg-neutral-900 overflow-hidden group/video">
              <video 
                ref={videoRef}
                key={activeTheme}
                autoPlay muted loop playsInline
                className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity duration-700"
                src={`https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=10`}
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
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
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
          {isQuotaLimited && (
            <div className="mb-3 flex items-center space-x-2 text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-yellow-500/80 bg-black/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-yellow-500/20">
              <AlertCircle size={10} />
              <span>Fallbacks Active // Switch Key for AI</span>
            </div>
          )}
          
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
      `}</style>
    </div>
  );
};

export default App;
