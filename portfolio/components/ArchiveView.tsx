
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const ArchiveView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen bg-[#0f1110] text-[#c5c8c6] font-mono flex flex-col selection:bg-red-500 selection:text-white">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] grayscale" />
      
      <header className="border-b border-white/10 p-8 flex justify-between items-end relative z-10 bg-[#0f1110]/80 backdrop-blur-md">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-red-500 tracking-[0.4em] uppercase">Technical Directory</p>
          <h1 className="text-4xl font-bold tracking-tighter">DATA_NODE_{selectedDomain.id.toUpperCase()}</h1>
        </div>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
           <span>Status: Active</span>
           <span>Rev: 0.2.4</span>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative z-10">
        {/* Navigation Column */}
        <div className="lg:col-span-3 border-r border-white/10 p-8 space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase opacity-30">Nodes</p>
            {allDomains.map((d, i) => (
              <button
                key={d.id}
                onClick={() => onSelect(d)}
                className={`w-full p-4 border flex justify-between items-center transition-all ${
                  selectedDomain.id === d.id ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/40'
                }`}
              >
                <span>0{i + 1}. {d.category}</span>
                <IconRenderer name={d.icon} size={14} />
              </button>
            ))}
          </div>
          
          <div className="p-6 bg-white/5 border border-white/10 rounded space-y-4">
            <p className="text-[10px] font-bold uppercase opacity-30">Keywords</p>
            <div className="flex flex-wrap gap-2">
              {selectedDomain.keywords.map((k, i) => (
                <span key={i} className="px-2 py-1 border border-white/20 text-[9px] hover:bg-red-500 hover:text-white transition-colors">
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-6 border-r border-white/10 p-12 lg:p-20 flex flex-col justify-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-red-500 text-sm font-bold tracking-widest uppercase">[{selectedDomain.category}]</p>
              <h2 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-none">{selectedDomain.title}</h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                {selectedDomain.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {selectedDomain.metrics.map((m, i) => (
                 <div key={i} className="border-l-2 border-red-500 pl-6">
                   <p className="text-[10px] font-bold uppercase opacity-30 mb-2">{m.label}</p>
                   <p className="text-2xl font-bold">{m.value}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Visual Column */}
        <div className="lg:col-span-3 p-8 flex flex-col gap-8 bg-black/40">
           <div className="flex-1 border border-white/10 relative overflow-hidden group">
              <img src={selectedDomain.image} alt="" className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
           </div>
           <div className="p-6 border border-white/10 rounded flex justify-between items-center group cursor-pointer hover:bg-white hover:text-black transition-all">
             <span className="text-xs font-bold uppercase tracking-widest">Request Access</span>
             <IconRenderer name="arrow-right" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveView;
