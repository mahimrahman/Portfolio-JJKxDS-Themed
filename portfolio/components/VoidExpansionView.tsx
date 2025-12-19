
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const VoidExpansionView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col p-8 lg:p-20 relative overflow-hidden">
      {/* Absolute Void Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col flex-1">
        <header className="flex flex-col md:flex-row justify-between items-baseline gap-8 border-b border-white/10 pb-12 mb-12">
          <div className="space-y-2">
            <h1 className="text-7xl font-black tracking-tighter">VOID.00{allDomains.findIndex(d => d.id === selectedDomain.id) + 1}</h1>
            <p className="text-blue-500 font-bold tracking-[0.4em] text-xs uppercase">Infinite Information Processing</p>
          </div>
          <div className="flex gap-4">
            {allDomains.map(d => (
              <button 
                key={d.id} 
                onClick={() => onSelect(d)}
                className={`w-12 h-12 flex items-center justify-center border transition-all ${
                  selectedDomain.id === d.id ? 'bg-white text-black border-white' : 'border-white/10 text-white/40 hover:border-white/40'
                }`}
              >
                <IconRenderer name={d.icon} size={18} />
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 flex-1 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-white text-black text-[10px] font-black uppercase">Analysis Active</div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-none uppercase">{selectedDomain.title}</h2>
              <p className="text-xl text-white/60 font-light leading-relaxed max-w-lg">
                {selectedDomain.form}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-12 py-12 border-y border-white/5">
              {selectedDomain.stats.map((s, i) => (
                <div key={i}>
                  <p className="text-white/30 text-[10px] font-bold uppercase mb-2">{s.label}</p>
                  <p className="text-3xl font-black">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-12 group cursor-pointer">
              <div className="w-16 h-16 border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <IconRenderer name="chevron-right" size={32} />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase group-hover:translate-x-4 transition-transform">Initialize Connection</span>
            </div>
          </div>

          <div className="relative">
             {/* Abstract Geometric Void Shards */}
             <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full animate-pulse" />
             <div className="relative aspect-[4/5] bg-white/5 border border-white/10 p-4 backdrop-blur-3xl overflow-hidden">
                <div className="absolute top-4 left-4 text-[8px] text-white/40 uppercase font-bold tracking-widest">Spectral.Data_Stream</div>
                <img 
                  src={selectedDomain.image} 
                  className="w-full h-full object-cover grayscale opacity-80" 
                  alt=""
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-[1px] w-full bg-white/20 mb-4" />
                  <div className="flex justify-between items-end">
                    <p className="text-xs font-bold text-white/40 uppercase">Subject: {selectedDomain.rank}</p>
                    <p className="text-2xl font-black italic">TARGET_LOCKED</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoidExpansionView;
