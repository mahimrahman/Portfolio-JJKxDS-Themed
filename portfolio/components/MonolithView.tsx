
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const MonolithView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#121212] selection:bg-black selection:text-white">
      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        
        {/* Navigation Sidebar */}
        <div className="lg:w-32 border-r border-black/10 flex flex-col justify-between py-12 items-center bg-white">
          <div className="font-bold text-xl tracking-tighter uppercase [writing-mode:vertical-lr] rotate-180">
            THE LAB.
          </div>
          <div className="flex flex-col gap-8">
            {allDomains.map((d) => (
              <button 
                key={d.id}
                onClick={() => onSelect(d)}
                className={`w-12 h-12 flex items-center justify-center transition-all ${
                  selectedDomain.id === d.id ? 'bg-black text-white' : 'hover:bg-black/5'
                }`}
              >
                <IconRenderer name={d.icon} />
              </button>
            ))}
          </div>
          <div className="h-24 w-[1px] bg-black/10" />
        </div>

        {/* Main Exhibit Area */}
        <div className="flex-1 overflow-y-auto relative bg-white">
          <header className="p-12 lg:p-24 pb-0 flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-40">Section 0{allDomains.findIndex(d => d.id === selectedDomain.id) + 1}</span>
            <h1 className="text-[12vw] font-serif font-light leading-[0.85] tracking-tighter">
              {selectedDomain.title.split(' ')[0]} <br/>
              <span className="italic pl-[0.5em]">{selectedDomain.title.split(' ')[1]}</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 mt-12 border-t border-black/10">
            <div className="lg:col-span-4 p-12 lg:p-24 space-y-12 border-r border-black/10">
              <p className="text-2xl font-serif italic text-black/60 leading-relaxed">
                {selectedDomain.description}
              </p>
              
              <div className="space-y-6">
                {selectedDomain.metrics.map((m, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-black/5 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{m.label}</span>
                    <span className="text-xl font-serif italic">{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6">
                {selectedDomain.keywords.map((k, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-black text-white">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 relative bg-[#e5e5e5]">
              <img 
                src={selectedDomain.image} 
                alt="" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              <button className="absolute bottom-12 right-12 w-24 h-24 bg-black rounded-full text-white flex items-center justify-center group hover:scale-110 transition-transform">
                <IconRenderer name="arrow-right" size={40} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonolithView;
