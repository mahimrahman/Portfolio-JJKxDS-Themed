
import React, { useState, useEffect } from 'react';
import { SKILL_CATEGORIES, ABOUT_ME } from './constants';
import { 
  Swords, Sparkles, Orbit, Wind, Flame, CloudLightning, 
  Crosshair, Hexagon, ShieldAlert, Zap, Palette, 
  Code2, Users, Settings, ChevronUp 
} from 'lucide-react';

const StyleTheme: Record<string, any> = {
  water: { icon: Wind, color: 'text-blue-500', accent: 'bg-blue-500', glow: 'from-blue-500', kanji: '流', grade: 'Grade 1' },
  flame: { icon: Flame, color: 'text-red-500', accent: 'bg-red-500', glow: 'from-red-500', kanji: '炎', grade: 'Special Grade' },
  thunder: { icon: CloudLightning, color: 'text-orange-500', accent: 'bg-orange-500', glow: 'from-orange-500', kanji: '雷', grade: 'First Class' },
  cursed: { icon: Orbit, color: 'text-purple-600', accent: 'bg-purple-600', glow: 'from-purple-600', kanji: '呪', grade: 'Supreme Grade' }
};

const IconMap: Record<string, any> = {
  Palette: Palette,
  Code2: Code2,
  Users: Users,
  Settings: Settings
};

const App: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientY - window.innerHeight / 2) / 300;
    const y = (clientX - window.innerWidth / 2) / 300;
    setRotation({ x, y });
  };

  return (
    <section 
      className="min-h-screen w-full relative flex flex-col items-center justify-center bg-[#050505] overflow-hidden p-4 lg:p-8 perspective-root"
      onMouseMove={handleMouseMove}
    >
      {/* HUD HEADER */}
      <header className="relative z-50 mb-10 text-center mt-4">
         <div className="inline-block relative">
            <h1 className="text-3xl lg:text-5xl font-black text-white italic tracking-tighter uppercase mb-2">
               The Story of <span className="text-white/20">the Slayer</span>
            </h1>
            <div className="h-[2px] w-[300px] mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
         </div>
      </header>

      {/* MAIN CONTAINER */}
      <div 
        className="relative z-30 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        style={{ 
          transform: `rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.6s ease-out'
        }}
      >
        {/* ABOUT ME COLUMN */}
        <div className="lg:col-span-5 relative h-full">
           <div className="relative h-full p-8 lg:p-10 bg-[#0a0a0a] border border-white/5 rounded-xl shadow-2xl flex flex-col overflow-hidden group">
              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-blue-500 to-red-600 opacity-60" />

              <div className="absolute -right-4 -bottom-10 font-kanji text-[24rem] text-white/[0.02] group-hover:text-white/[0.06] transition-all duration-700 select-none pointer-events-none">
                 {ABOUT_ME.kanji}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                 <div className="flex items-start gap-4 mb-8">
                    <div className="w-1.5 h-12 bg-white/10" />
                    <div>
                       <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">{ABOUT_ME.title}</h2>
                       <span className="text-[11px] font-mono text-white/40 tracking-[0.4em] uppercase mt-2 block">{ABOUT_ME.subtitle}</span>
                    </div>
                 </div>

                 <div className="space-y-6 flex-1">
                    {ABOUT_ME.description.map((para, i) => (
                      <p key={i} className="text-base lg:text-lg font-bold text-white/50 leading-relaxed italic group-hover:text-white transition-colors duration-500">
                        {para}
                      </p>
                    ))}
                 </div>

                 <div className="mt-12 flex items-center gap-2">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                       <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                       <div className="w-2.5 h-2.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]" />
                    </div>
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] ml-4">DOMAIN_AUTHENTICATED</span>
                 </div>
              </div>
           </div>
        </div>

        {/* SKILLS MATRIX COLUMN */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((category) => {
            const theme = StyleTheme[category.style];
            const CategoryIcon = IconMap[category.icon];

            return (
              <div 
                key={category.id}
                className="relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden group flex flex-col hover:border-white/10 transition-all duration-300 shadow-2xl"
              >
                {/* Reference Image Style Glowing Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${theme.glow} to-transparent opacity-80 group-hover:opacity-100 transition-opacity`} />

                {/* Background Kanji - VISIBLE ON HOVER */}
                <div className={`absolute -right-6 -bottom-10 font-kanji text-[18rem] ${theme.color} opacity-0 group-hover:opacity-[0.07] transition-all duration-700 select-none pointer-events-none transform group-hover:translate-y-[-10px]`}>
                   {theme.kanji}
                </div>

                <div className="p-6 relative z-10">
                   {/* Card Header */}
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                         <div className={`w-10 h-10 rounded-lg ${theme.accent} bg-opacity-20 flex items-center justify-center border border-white/5 shadow-inner`}>
                            <CategoryIcon size={20} className={theme.color} />
                         </div>
                         <div>
                            <h3 className="text-xl font-black text-white italic tracking-tight uppercase leading-none">
                              {category.title}
                            </h3>
                            <span className={`text-[9px] font-black tracking-widest uppercase ${theme.color} mt-1 block opacity-60`}>
                               {category.subLabel}
                            </span>
                         </div>
                      </div>
                      <ChevronUp size={18} className="text-yellow-500/50" />
                   </div>

                   {/* Skill Pills - Strict 4x2 Grid with Uniform Sizes */}
                   <div className="grid grid-cols-2 gap-2 mb-2">
                      {category.skills.map((skill) => (
                        <div 
                          key={skill}
                          className="bg-[#141414]/80 backdrop-blur-sm border border-white/[0.03] hover:border-white/20 transition-all py-2 rounded-sm flex items-center justify-center h-10 w-full"
                        >
                          <span className="text-[10px] lg:text-[11px] font-black text-white/80 tracking-[0.05em] uppercase font-mono text-center px-2">
                            {skill}
                          </span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Card Footer HUD */}
                <div className="mt-auto px-6 pb-5 pt-2 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full ${theme.accent}`} />
                      <span className="text-[8px] font-mono text-white tracking-widest">{theme.grade}</span>
                   </div>
                   <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-3 h-1 skew-x-[-15deg] ${i <= 4 ? theme.accent : 'bg-white/5'}`} />
                      ))}
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DECORATIVE FOOTER HUD */}
      <footer className="w-full max-w-7xl mt-12 flex justify-between items-end opacity-20 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
         <div className="flex gap-10">
            <div className="flex flex-col">
               <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Sector_Loc</span>
               <span className="text-[11px] font-black italic text-white/60">DOMAIN_DISTRICT_CORE.OS</span>
            </div>
            <div className="hidden sm:flex flex-col border-l border-white/10 pl-10">
               <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Node_Status</span>
               <div className="flex items-center gap-2">
                  <Hexagon size={12} className="text-green-500/50" />
                  <span className="text-[11px] font-black italic text-white/40 uppercase tracking-tighter">SECURE</span>
               </div>
            </div>
         </div>
         <div className="flex items-center gap-4">
            <div className="text-right">
               <span className="text-[8px] font-black text-white/30 tracking-widest block">System_Rev</span>
               <span className="text-xs font-black text-white/60 italic">V4.5_SHIBUYA</span>
            </div>
            <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center rotate-45 bg-white/5">
               <Crosshair size={18} className="text-white/20 -rotate-45" />
            </div>
         </div>
      </footer>
    </section>
  );
};

export default App;
