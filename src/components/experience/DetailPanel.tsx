import React from 'react';
import { ExperienceNode } from '../../types/experience';

interface Props {
  node: ExperienceNode | null;
  onClose: () => void;
}

const DetailPanel: React.FC<Props> = ({ node, onClose }) => {
  if (!node) return null;

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      {/* The Card - "Domain Expansion" Style */}
      <div
        className="relative w-full max-w-2xl bg-[#0a0a0f]/90 backdrop-blur-xl border border-gray-700 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden animate-domain-expand transform"
        style={{ borderColor: node.color }}
      >
        {/* Decorative Top Bar (Breathing Style Indicator) */}
        <div
          className="h-2 w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${node.color}, transparent)`,
            boxShadow: `0 0 20px ${node.color}`
          }}
        />

        {/* Close Button - Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-white transition-colors group"
        >
           <span className="block w-8 h-8 relative">
             <span className="absolute top-1/2 left-0 w-full h-[1px] bg-current transform rotate-45 group-hover:bg-red-500 transition-colors"></span>
             <span className="absolute top-1/2 left-0 w-full h-[1px] bg-current transform -rotate-45 group-hover:bg-red-500 transition-colors"></span>
           </span>
        </button>

        <div className="p-8 md:p-10 relative z-0">

          {/* Background Watermark/Sigil */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 100 100" className="fill-current text-white animate-spin-slow">
                <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
             </svg>
          </div>

          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-baseline space-x-4 mb-2">
               <span
                 className="px-2 py-0.5 text-[10px] font-subtitle uppercase tracking-widest border rounded text-white"
                 style={{ borderColor: node.color, color: node.color }}
               >
                 {node.region}
               </span>
               <span className="text-gray-500 font-subtitle text-xs tracking-widest uppercase">
                 {node.date}
               </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-title font-bold text-white tracking-tight mb-2 drop-shadow-lg">
              {node.role}
            </h2>
            <h3 className="text-xl md:text-2xl font-subtitle text-gray-400 uppercase tracking-widest">
              {node.company}
            </h3>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8 opacity-50"></div>

          {/* Body Content */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Description Column */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
                Mission Intel
              </h4>
              <p className="text-gray-300 font-body text-lg leading-relaxed border-l-2 border-gray-700 pl-4">
                {node.description}
              </p>
            </div>

            {/* Skills Column */}
            <div className="md:col-span-1">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
                Techniques
              </h4>
              <div className="flex flex-wrap gap-2">
                {node.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-subtitle hover:bg-white/10 hover:border-white/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Footer Status Bar */}
          <div className="bg-black/40 p-3 flex justify-between items-center text-[10px] font-subtitle uppercase text-gray-600 tracking-wider">
           <span>System: Online</span>
           <span>Data Integrity: 100%</span>
           <span>ID: {node.id}</span>
        </div>

      </div>
    </div>
  );
};

export default DetailPanel;
