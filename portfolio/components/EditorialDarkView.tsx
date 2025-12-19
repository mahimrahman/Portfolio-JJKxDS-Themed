
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const EditorialDarkView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Fixed Vertical Navigation */}
      <div className="w-24 border-r border-white/5 flex flex-col items-center py-12 gap-12 sticky top-0 h-screen">
        <div className="font-black text-2xl -rotate-90 origin-center whitespace-nowrap tracking-[0.5em] mb-12">BATTLE</div>
        <div className="flex-1 flex flex-col gap-4">
          {allDomains.map((d) => (
            <button
              key={d.id}
              onClick={() => onSelect(d)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                selectedDomain.id === d.id ? 'bg-white text-black' : 'hover:bg-white/10'
              }`}
            >
              <IconRenderer name={d.icon} size={20} />
            </button>
          ))}
        </div>
        <div className="w-1 h-24 bg-white/10 rounded-full" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <header className="p-12 lg:p-24 pb-0 flex items-baseline justify-between gap-12 border-b border-white/5">
          <h1 className="text-[12vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap overflow-hidden select-none opacity-20 hover:opacity-100 transition-opacity duration-500">
            {selectedDomain.title}
          </h1>
          <div className="text-right hidden lg:block">
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Records Directory</p>
            <p className="text-xl font-mono mt-1">NO. 00{allDomains.findIndex(d => d.id === selectedDomain.id) + 1}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Stats & Description */}
          <div className="p-12 lg:p-24 space-y-16 border-r border-white/5">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold max-w-md leading-tight">
                Crafting meaningful digital experiences across the {selectedDomain.title} landscape.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg font-mono">
                {selectedDomain.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12">
              {selectedDomain.stats.map((s, i) => (
                <div key={i} className="group border-t border-white/10 pt-6">
                  <p className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{s.label}</p>
                  <p className="text-6xl font-black">{s.value}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-12">
              <button className="inline-flex items-center gap-6 group">
                <span className="text-2xl font-bold border-b-2 border-transparent group-hover:border-white transition-all">Explore Case Studies</span>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black group-hover:translate-x-4 transition-transform">
                  <IconRenderer name="chevron-right" size={32} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Highlights & Visuals */}
          <div className="p-12 lg:p-24 space-y-12">
            <h3 className="text-xs font-bold text-white/20 uppercase tracking-[1em] mb-8">Competencies</h3>
            <div className="flex flex-col gap-6">
              {selectedDomain.highlights.map((h, i) => (
                <div key={i} className="flex items-center justify-between text-3xl font-black group cursor-default">
                  <span className="opacity-40 group-hover:opacity-100 transition-opacity">{h}</span>
                  <div className="w-0 group-hover:w-24 h-[2px] bg-white transition-all duration-500" />
                </div>
              ))}
            </div>

            <div className="mt-12 aspect-square w-full bg-white/5 relative overflow-hidden group">
              <img 
                src={selectedDomain.image} 
                alt="Highlight" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-mono text-sm tracking-widest font-bold">PREVIEWING_WORKSPACE.OBJ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialDarkView;
