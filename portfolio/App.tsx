
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from './constants';
import { DomainData, DesignStyle } from './types';
import IconRenderer from './components/IconRenderer';
import StyleSwitcher from './components/StyleSwitcher';
import NeoCyberView from './components/NeoCyberView';
import GlassMinimalView from './components/GlassMinimalView';
import EditorialDarkView from './components/EditorialDarkView';
import CursedBreathView from './components/CursedBreathView';
import VoidExpansionView from './components/VoidExpansionView';
import MangaPanelView from './components/MangaPanelView';
import MonolithView from './components/MonolithView';
import RefractionView from './components/RefractionView';
import ArchiveView from './components/ArchiveView';

function App() {
  const [selected, setSelected] = useState<DomainData>(PORTFOLIO_DATA[0]);
  const [currentStyle, setCurrentStyle] = useState<DesignStyle>('DEFAULT');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (domain: DomainData) => {
    if (domain.id === selected.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelected(domain);
      setIsTransitioning(false);
    }, 300);
  };

  const menuLabels: Record<string, string> = {
    dev: 'Dev',
    uiux: 'UI/UX',
    graphic: 'Graphic',
    photo: 'Photo'
  };

  const theme = useMemo(() => ({
    glow: { boxShadow: `0 0 60px ${selected.color}22` },
    text: { color: selected.color },
    bg: { backgroundColor: selected.color },
    overlay: { backgroundImage: `linear-gradient(to top, ${selected.color}66, transparent)` },
    border: { borderColor: selected.color }
  }), [selected]);

  // Render the selected style view
  const renderView = () => {
    switch (currentStyle) {
      case 'NEO_CYBER': return <NeoCyberView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      case 'REFRACTION': return <RefractionView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      case 'EDITORIAL': return <EditorialDarkView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      case 'CURSED': return <CursedBreathView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      case 'VOID': return <VoidExpansionView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      case 'MANGA': return <MangaPanelView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      case 'MONOLITH': return <MonolithView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      case 'ARCHIVE': return <ArchiveView selectedDomain={selected} allDomains={PORTFOLIO_DATA} onSelect={handleSelect} />;
      default: return (
        <div className="min-h-screen flex items-center justify-center p-4 lg:p-10 transition-colors duration-1000 overflow-hidden" 
             style={{ backgroundColor: `${selected.secondaryColor}05` }}>
          
          {/* Background Ambience */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 opacity-5 transition-colors duration-1000" 
              style={{ backgroundColor: selected.color }} 
            />
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-[1px] h-32 animate-float"
                style={{
                  backgroundColor: selected.color,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${3 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.1
                }}
              />
            ))}
          </div>

          {/* Main UI Container */}
          <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-6 relative z-10">
            
            {/* Navigation Sidebar */}
            <div className="lg:w-24 flex lg:flex-col gap-4 justify-center items-center">
              {PORTFOLIO_DATA.map((d) => (
                <button
                  key={d.id}
                  onClick={() => handleSelect(d)}
                  className={`group relative w-16 h-16 lg:w-20 lg:h-24 flex flex-col items-center justify-center border-4 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    selected.id === d.id 
                    ? 'border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                    : 'border-white/10 bg-black/60 text-white/30 hover:border-white/40'
                  }`}
                >
                  <div 
                    className={`absolute top-0 left-0 w-full h-1 transition-colors ${selected.id === d.id ? '' : 'bg-transparent'}`} 
                    style={selected.id === d.id ? theme.bg : {}} 
                  />
                  <IconRenderer name={d.icon} size={24} />
                  <span className="text-[10px] font-black uppercase mt-2 hidden lg:block tracking-widest">
                    {menuLabels[d.id]}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div 
              className={`flex-1 bg-black border-[10px] border-white relative overflow-hidden flex flex-col md:flex-row transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-[0.99]' : 'slash-enter opacity-100 scale-100'}`}
              style={theme.glow}
            >
              {/* Halftone Overlay */}
              <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
              
              {/* Visual Side */}
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden border-b-[10px] md:border-b-0 md:border-r-[10px] border-white group">
                <div className="absolute inset-0 speed-lines opacity-10 group-hover:opacity-25 transition-opacity duration-700" />
                <img 
                  src={selected.image} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  alt={selected.title}
                />
                <div className="absolute inset-0 transition-opacity duration-1000" style={theme.overlay} />
                
                {/* Minimal Title Badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h2 className="text-6xl lg:text-8xl font-manga tracking-tighter uppercase transform -skew-x-12 leading-none drop-shadow-[4px_4px_0_#000]">
                    {selected.title}
                  </h2>
                </div>
              </div>

              {/* Text/Details Side */}
              <div className="md:w-3/5 p-8 lg:p-14 flex flex-col justify-between bg-[#080808] relative">
                <div className="space-y-12 relative z-10">
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold tracking-[0.4em] uppercase opacity-40">Core Specialization</p>
                    <p className="text-3xl font-black italic uppercase tracking-tight transform -skew-x-6" style={theme.text}>
                      {selected.technique}
                    </p>
                  </div>

                  <p className="text-base lg:text-lg leading-relaxed text-white/70 font-medium max-w-md border-l-4 border-white/10 pl-8">
                    {selected.description}
                  </p>

                  {/* Portfolio Highlights */}
                  <div className="space-y-6 pt-8 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Field Records</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                      {selected.portfolioOverview.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-2 h-2 rounded-full transition-all duration-500" style={theme.bg} />
                          <span className="text-[11px] font-bold uppercase text-white/50 group-hover:text-white transition-colors tracking-widest leading-none">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags and CTA */}
                <div className="mt-16 flex flex-col gap-8 relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {selected.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase px-4 py-1.5 bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white transition-all">
                        #{t}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full py-6 text-black font-manga text-3xl tracking-[0.2em] uppercase transform hover:scale-[1.01] transition-all active:scale-95 shadow-[8px_8px_0_0_#000] relative group overflow-hidden"
                    style={theme.bg}
                  >
                    <span className="relative z-10">Expand Project</span>
                    <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`transition-all duration-700 ${currentStyle === 'MONOLITH' || currentStyle === 'MANGA' ? 'bg-[#f5f5f5]' : 'bg-black'}`}>
      {renderView()}
      <StyleSwitcher currentStyle={currentStyle} onStyleChange={setCurrentStyle} />
    </div>
  );
}

export default App;
