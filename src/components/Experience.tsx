import React, { useState } from 'react';
import ParticleBackground from './experience/ParticleBackground';
import ConstellationGraph from './experience/ConstellationGraph';
import DetailPanel from './experience/DetailPanel';
import { initialData } from '../data/experienceData';
import { Region, ExperienceNode } from '../types/experience';
import SectionMerge from './SectionMerge';

const Experience: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<Region>(Region.ALL);
  const [selectedNode, setSelectedNode] = useState<ExperienceNode | null>(null);
  const [resetKey, setResetKey] = useState<number>(0);

  const handleNodeSelect = (node: ExperienceNode | null) => {
    setSelectedNode(node);
  };

  const handleReset = () => {
    setActiveRegion(Region.ALL);
    setSelectedNode(null);
    setResetKey(prev => prev + 1);
  };

  return (
    <section className="relative w-full min-h-screen bg-jjk-dark overflow-hidden font-body">
      {/* Subtle Section Merge Overlays */}
      <SectionMerge position="top" intensity="light" />
      <SectionMerge position="bottom" intensity="light" />

      {/* 1. Background Layer */}
      <ParticleBackground />

      {/* 2. Header / Title - Centered (flow layout to avoid overlaps) */}
      <header className="relative z-10 pt-8 md:pt-10 px-6 flex flex-col items-center text-center">
        <h1 className="section-title mb-0">
          Constellation of Experience
        </h1>
        <p className="text-sm font-subtitle text-blue-400 tracking-[0.3em] uppercase opacity-80 mt-2">
          A Celestial Map of Professional Achievements
        </p>
      </header>

      {/* Reset Button - Separate positioning */}
      <div className="absolute top-6 right-6 md:right-12 z-10">
        <button
          onClick={handleReset}
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2.5 border-2 border-red-500/40 bg-black/30 backdrop-blur-md text-red-400 text-[10px] font-subtitle uppercase tracking-widest hover:bg-red-500/20 hover:border-red-500 hover:text-red-100 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse group-hover:bg-white shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
          RESTORE
        </button>
      </div>

      {/* 3. Filter Controls (JJK/DS Style Tabs) */}
      <div className="relative z-10 mt-6 flex justify-center px-4 pointer-events-auto">
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 bg-black/40 backdrop-blur-sm p-2 rounded-full border border-gray-800">
          {Object.values(Region).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`
                relative px-6 py-2 text-xs md:text-sm font-subtitle uppercase tracking-widest transition-all duration-300
                ${activeRegion === region
                  ? 'text-white bg-jjk-purple/80 shadow-[0_0_15px_rgba(109,40,217,0.6)]'
                  : 'text-gray-500 hover:text-white hover:bg-white/5'}
                border border-transparent hover:border-white/20 rounded-full
              `}
            >
              {region}
              {activeRegion === region && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-white shadow-[0_0_8px_#fff]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Main Constellation Canvas */}
      {/* Constrain the graph to the visible content rectangle (below header/tabs, above footer hint). */}
      <div className="absolute inset-x-0 top-56 md:top-60 bottom-24 z-[1]">
        <ConstellationGraph
          key={resetKey}
          data={initialData}
          activeRegion={activeRegion}
          onNodeSelect={handleNodeSelect}
          selectedNodeId={selectedNode ? selectedNode.id : null}
        />
      </div>

      {/* 5. Detail Side Panel */}
      {selectedNode && (
        <div
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm pointer-events-auto"
          onClick={() => setSelectedNode(null)}
        >
          <div
            className="h-full w-full pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <DetailPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
          </div>
        </div>
      )}

      {/* 6. Footer Hint */}
      <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none z-10">
        <p className="text-[11px] text-gray-400 font-subtitle uppercase tracking-[0.15em] opacity-90">
          Drag nodes to explore • Click to expand domain
        </p>
      </div>
    </section>
  );
};

export default Experience;
