
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const RefractionView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col p-6 lg:p-12 relative overflow-hidden">
      {/* Dynamic Blurred Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[160px] opacity-20 rounded-full transition-colors duration-1000"
        style={{ backgroundColor: selectedDomain.accent }}
      />
      
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col flex-1">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
            <span className="font-bold tracking-[0.4em] text-xs uppercase opacity-60">Architectural Pulse</span>
          </div>
          <nav className="flex gap-2">
            {allDomains.map(d => (
              <button 
                key={d.id} 
                onClick={() => onSelect(d)}
                className={`px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all ${
                  selectedDomain.id === d.id ? 'bg-white text-black' : 'hover:bg-white/5 border border-white/10'
                }`}
              >
                {d.id}
              </button>
            ))}
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1 items-center">
          <div className="space-y-12 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-6">
              <h1 className="text-[8vw] font-serif leading-[0.9] tracking-tighter italic">
                {selectedDomain.title}
              </h1>
              <p className="text-xl text-white/40 max-w-lg font-light leading-relaxed">
                {selectedDomain.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {selectedDomain.metrics.map((m, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem]">
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">{m.label}</p>
                  <p className="text-3xl font-serif italic">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-4">
               <img 
                src={selectedDomain.image} 
                className="w-full h-full object-cover rounded-[2rem] opacity-60 hover:opacity-100 transition-all duration-700" 
                alt=""
               />
               <div className="absolute top-10 left-10 right-10 flex justify-between items-start pointer-events-none">
                 <div className="px-3 py-1 bg-white/10 border border-white/20 backdrop-blur-md rounded text-[8px] uppercase tracking-widest">Exhibit.OBJ</div>
                 <IconRenderer name="maximize" size={16} className="text-white/40" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefractionView;
