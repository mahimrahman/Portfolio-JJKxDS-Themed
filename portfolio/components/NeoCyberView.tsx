
import React from 'react';
import { DomainData } from '../types';
import IconRenderer from './IconRenderer';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

interface Props {
  selectedDomain: DomainData;
  allDomains: DomainData[];
  onSelect: (domain: DomainData) => void;
}

const NeoCyberView: React.FC<Props> = ({ selectedDomain, allDomains, onSelect }) => {
  const chartData = selectedDomain.stats.map(s => ({
    name: s.label,
    value: parseInt(s.value.replace(/\D/g, '')) || 10
  }));

  return (
    <div className="min-h-screen p-8 lg:p-12 font-mono flex flex-col gap-12 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase italic bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
          Battle Records
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <p className="text-purple-400/80 text-sm tracking-widest uppercase">Portfolio Data Stream // V3.0</p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest px-4 mb-2">Select Domain</h2>
          {allDomains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => onSelect(domain)}
              className={`group relative flex items-center gap-6 p-6 transition-all duration-300 border-l-4 ${
                selectedDomain.id === domain.id
                  ? 'bg-purple-500/10 border-purple-500'
                  : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className={`p-3 rounded-lg ${selectedDomain.id === domain.id ? 'bg-purple-500 text-black' : 'bg-white/10 text-white/40 group-hover:text-white'}`}>
                <IconRenderer name={domain.icon} size={24} />
              </div>
              <div className="text-left flex-1">
                <h3 className={`text-lg font-bold uppercase ${selectedDomain.id === domain.id ? 'text-white' : 'text-white/60'}`}>
                  {domain.title}
                </h3>
                <p className="text-xs text-white/40 line-clamp-1 mt-1">{domain.description}</p>
              </div>
              {selectedDomain.id === domain.id && (
                <div className="absolute right-6 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7]" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Main Panel */}
        <div className="lg:col-span-8 bg-white/[0.03] border border-white/10 p-8 lg:p-12 relative overflow-hidden group">
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50" />

          {/* Background Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

          <div className="relative z-10 flex flex-col gap-10">
            {/* Header Content */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30 text-[10px] font-bold tracking-tighter uppercase">
                   <IconRenderer name="cpu" size={12} /> Live Module Active
                </div>
                <h2 className="text-5xl font-black uppercase italic tracking-tighter">{selectedDomain.title}</h2>
                <p className="text-white/60 text-sm max-w-xl leading-relaxed">{selectedDomain.description}</p>
              </div>
              <div className="flex gap-4">
                {selectedDomain.stats.map((stat, i) => (
                  <div key={i} className="text-right border-r border-white/10 pr-4 last:border-0 last:pr-0">
                    <p className="text-white/30 text-[10px] uppercase font-bold">{stat.label}</p>
                    <p className="text-2xl font-black text-purple-400">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedDomain.highlights.map((h, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-4 hover:border-purple-500/30 transition-colors flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  <span className="text-xs font-bold text-white/80 uppercase">{h}</span>
                </div>
              ))}
            </div>

            {/* Visualizer Area */}
            <div className="h-64 bg-black/40 border border-white/5 p-6 relative overflow-hidden">
               <div className="absolute top-4 left-4 flex gap-2">
                 <div className="w-1 h-1 bg-white/20" />
                 <div className="w-1 h-1 bg-white/20" />
                 <div className="w-1 h-1 bg-white/20" />
               </div>
               <div className="absolute bottom-4 right-4 text-[10px] text-white/20 uppercase tracking-widest font-bold">Metrics.Visualizer</div>
               
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={selectedDomain.color} fillOpacity={0.6 + (index * 0.1)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Action */}
            <button className="self-start group flex items-center gap-4 bg-purple-500 hover:bg-purple-600 text-black font-black uppercase italic py-4 px-8 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              Explore Records
              <IconRenderer name="chevron-right" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeoCyberView;
