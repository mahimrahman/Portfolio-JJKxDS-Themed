import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ConstellationGraph from './components/ConstellationGraph';
import DetailPanel from './components/DetailPanel';
import { initialData } from './data';
import { Region, ExperienceNode } from './types';

const App: React.FC = () => {
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
    <div className="relative w-screen h-screen bg-jjk-dark overflow-hidden flex flex-col font-body">
      
      {/* 1. Background Layer */}
      <ParticleBackground />

      {/* 2. Header / Title */}
      <div className="absolute top-0 left-0 w-full p-6 z-10 pointer-events-none flex justify-between items-start">
        <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              CHRONICLES
            </h1>
            <p className="text-sm font-tech text-blue-400 tracking-[0.3em] uppercase opacity-80 mt-1">
              A Celestial Map of Professional Achievements
            </p>
        </div>
        
        {/* Reset Button */}
        <button 
          onClick={handleReset}
          className="pointer-events-auto group flex items-center gap-2 px-4 py-2 border border-red-500/30 bg-black/20 backdrop-blur-md text-red-400 text-[10px] font-tech uppercase tracking-widest hover:bg-red-500/10 hover:border-red-500 hover:text-red-100 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse group-hover:bg-white"></span>
          System Restore
        </button>
      </div>

      {/* 3. Filter Controls (Katana/JJK Style Tabs) */}
      <div className="absolute top-24 left-0 w-full z-10 flex justify-center px-4 pointer-events-auto">
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 bg-black/40 backdrop-blur-sm p-2 rounded-full border border-gray-800">
          {Object.values(Region).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`
                relative px-6 py-2 text-xs md:text-sm font-bold uppercase tracking-widest font-tech transition-all duration-300
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
      <main className="flex-1 relative z-0">
        <ConstellationGraph 
          key={resetKey} // Force remount on reset
          data={initialData} 
          activeRegion={activeRegion}
          onNodeSelect={handleNodeSelect}
          selectedNodeId={selectedNode ? selectedNode.id : null}
        />
      </main>

      {/* 5. Detail Side Panel */}
      {selectedNode && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none pointer-events-auto md:pointer-events-none"
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
      <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none z-10">
        <p className="text-[10px] text-gray-500 font-tech uppercase tracking-[0.2em] animate-pulse">
          Drag nodes to explore • Click to expand domain
        </p>
      </div>
    </div>
  );
};

export default App;