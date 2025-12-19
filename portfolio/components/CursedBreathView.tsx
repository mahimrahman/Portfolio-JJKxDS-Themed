
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const CursedBreathView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen relative bg-[#0a0510] overflow-hidden flex flex-col items-center py-20 px-6">
      {/* Decorative Traditional Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/seigaiha.png')] scale-150" />
      
      {/* Floating "Cursed" Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-purple-500/30 blur-xl rounded-full animate-pulse"
            style={{
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: i * 0.5 + 's',
              animationDuration: Math.random() * 5 + 5 + 's'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full z-10 space-y-20">
        <header className="text-center space-y-6">
          <div className="inline-block relative">
             <span className="text-xs font-bold text-purple-400 uppercase tracking-[0.5em] block mb-2">Portfolio Archives</span>
             <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
               The Record.
             </h1>
             <div className="absolute -right-12 -top-4 text-4xl text-red-600 opacity-40 font-manga select-none">術式</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Navigation Tab Style */}
          <div className="lg:col-span-3 flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0">
            {allDomains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => onSelect(domain)}
                className={`relative px-6 py-8 text-left transition-all duration-500 border-2 overflow-hidden ${
                  selectedDomain.id === domain.id 
                  ? 'border-purple-500 bg-purple-950/20 scale-105 z-10' 
                  : 'border-white/5 bg-white/5 hover:border-white/20'
                }`}
              >
                {selectedDomain.id === domain.id && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                )}
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded ${selectedDomain.id === domain.id ? 'text-purple-400' : 'text-white/20'}`}>
                    <IconRenderer name={domain.icon} size={20} />
                  </div>
                  <span className={`text-sm font-black uppercase tracking-widest ${selectedDomain.id === domain.id ? 'text-white' : 'text-white/40'}`}>
                    {domain.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content Card */}
          <div className="lg:col-span-9 bg-black/60 backdrop-blur-md border border-white/10 p-10 lg:p-16 relative wisteria-glow">
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-purple-500" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-purple-500" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-red-600 text-[10px] font-black px-2 py-0.5 rounded text-white uppercase tracking-tighter">Ranking</span>
                    <span className="text-white/40 font-mono text-xs">{selectedDomain.rank}</span>
                  </div>
                  <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none">{selectedDomain.title}</h2>
                  <p className="text-purple-300 font-bold italic border-l-4 border-purple-500 pl-4">{selectedDomain.form}</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {selectedDomain.stats.map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">{stat.label}</p>
                      <p className="text-2xl font-black text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedDomain.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors">
                      {h}
                    </span>
                  ))}
                </div>

                <button className="group relative w-full py-4 bg-purple-600 text-white font-black uppercase italic tracking-[0.2em] overflow-hidden transition-all hover:bg-purple-700">
                  <span className="relative z-10">Expand Domain</span>
                  <div className="absolute top-0 left-[-100%] group-hover:left-[100%] transition-all duration-700 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/20">
                  <img src={selectedDomain.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 font-manga text-xl text-white opacity-40">領域展開</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursedBreathView;
