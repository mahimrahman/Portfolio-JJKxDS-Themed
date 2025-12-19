
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const MangaPanelView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen bg-white text-black font-manga flex flex-col p-6 lg:p-12 overflow-hidden selection:bg-red-600 selection:text-white">
      <div className="max-w-7xl mx-auto w-full border-8 border-black p-4 lg:p-10 flex-1 flex flex-col halftone">
        
        <header className="flex justify-between items-center mb-10 border-b-8 border-black pb-8">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase transform -skew-x-6">The Archives</h1>
            <div className="flex gap-2">
              <div className="px-2 py-0.5 bg-black text-white text-xs font-bold uppercase">Volume 24</div>
              <div className="px-2 py-0.5 border-2 border-black text-xs font-bold uppercase">Chapter: {selectedDomain.title}</div>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm font-black italic leading-tight">"IN THIS WORLD, <br/> POWER IS ABSOLUTE."</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          {/* Vertical Panel List */}
          <div className="lg:col-span-3 grid grid-rows-3 gap-6">
            {allDomains.slice(0, 3).map((d) => (
              <button
                key={d.id}
                onClick={() => onSelect(d)}
                className={`group relative border-4 border-black overflow-hidden transition-all duration-300 ${
                  selectedDomain.id === d.id ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity">
                  <img src={d.image} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 p-6 flex flex-col h-full justify-center text-center">
                  <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-60">Entry</p>
                  <p className="text-xl font-black uppercase italic tracking-tighter">{d.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Main Large Panel */}
          <div className="lg:col-span-9 border-4 border-black grid grid-cols-1 lg:grid-cols-2 bg-white overflow-hidden relative">
            {/* Speed Lines Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] scale-150 rotate-45" />
            
            <div className="p-10 lg:p-16 flex flex-col justify-between relative z-10 border-r-4 border-black">
              <div className="space-y-8">
                <div className="relative">
                  <h2 className="text-6xl lg:text-8xl font-black italic uppercase leading-none tracking-tighter mb-4 transform -skew-x-12">{selectedDomain.title}</h2>
                  <div className="absolute -top-10 -right-10 text-8xl font-black text-red-600 opacity-20 select-none">斬</div>
                </div>
                <p className="text-2xl font-bold leading-tight italic border-l-8 border-black pl-6">
                  {selectedDomain.form}
                </p>
              </div>

              <div className="space-y-12 mt-12">
                <div className="grid grid-cols-3 gap-8 border-t-4 border-black pt-8">
                  {selectedDomain.stats.map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-[10px] font-black uppercase mb-1">{s.label}</p>
                      <p className="text-2xl font-black italic border-b-2 border-black inline-block">{s.value}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full py-6 bg-red-600 text-white font-black text-2xl uppercase italic tracking-tighter transform hover:scale-[1.02] transition-transform active:scale-95 shadow-[8px_8px_0_0_#000]">
                  Activate Technique
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden group">
              <img 
                src={selectedDomain.image} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110" 
                alt="" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 right-10 text-white text-right">
                <p className="text-6xl font-black italic drop-shadow-[4px_4px_0_#000]">BOOM!!</p>
                <p className="text-sm font-bold bg-black text-white px-3 py-1 mt-2 inline-block">Chapter {selectedDomain.id === 'dev' ? '01' : '02'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangaPanelView;
