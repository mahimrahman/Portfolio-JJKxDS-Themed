
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const GlassMinimalView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  return (
    <div className="min-h-screen font-space relative py-16 px-6 lg:px-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Curated Portfolio</p>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">The Lab.</h1>
          </div>
          <nav className="flex bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10">
            {allDomains.map((d) => (
              <button
                key={d.id}
                onClick={() => onSelect(d)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  selectedDomain.id === d.id ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'
                }`}
              >
                {d.title}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Display */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-10 lg:p-14 flex flex-col gap-10 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <IconRenderer name={selectedDomain.icon} />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">{selectedDomain.title}</h2>
            </div>
            
            <p className="text-xl text-white/60 leading-relaxed font-light italic">
              "{selectedDomain.description}"
            </p>

            <div className="grid grid-cols-3 gap-6">
              {selectedDomain.stats.map((s, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-3xl font-bold tracking-tighter">{s.value}</p>
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="h-[2px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            <div className="flex flex-wrap gap-3">
              {selectedDomain.highlights.map((h, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                  {h}
                </span>
              ))}
            </div>

            <button className="mt-4 flex items-center justify-between w-full p-6 rounded-3xl bg-white text-black font-bold group hover:bg-emerald-400 transition-all duration-300">
              <span className="text-xl uppercase">View Case Studies</span>
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <IconRenderer name="chevron-right" />
              </div>
            </button>
          </div>

          {/* Featured Visual */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="h-[600px] w-full bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative">
              <img 
                src={selectedDomain.image} 
                alt={selectedDomain.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white/40 font-mono text-xs mb-2">Project: Preview_01.img</p>
                <h3 className="text-2xl font-bold">Experience Design System</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassMinimalView;
