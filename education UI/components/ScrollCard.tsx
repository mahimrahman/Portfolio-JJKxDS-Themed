import React, { useState } from 'react';
import { EducationEntry } from '../types';

interface MasterySealProps {
  entry: EducationEntry;
  index: number;
}

const MasterySeal: React.FC<MasterySealProps> = ({ entry, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flex flex-col items-center text-center group"
    >
      {/* 3D Flippable Seal Area */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 [perspective:1000px]">
        <div
          className={`relative w-full h-full cursor-pointer transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(e)}
          aria-label={`View details for ${entry.degree}`}
        >
          {/* Front Face */}
          <div className="absolute w-full h-full rounded-full [backface-visibility:hidden]">
            <div
              className={`
                relative w-full h-full
                flex items-center justify-center rounded-full 
                transition-all duration-500 ease-in-out 
                shadow-lg group-hover:shadow-2xl group-hover:scale-105
                ${entry.theme.glowColor}
                ${entry.theme.pattern}
              `}
            >
              <div className="absolute inset-0 rounded-full border-2 border-slate-700/50"></div>
              <div className="absolute inset-2 rounded-full border border-slate-600/50 animate-pulse"></div>
              
              {/* Crest container - will hide on hover */}
              <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                {entry.theme.crest}
              </div>

              {/* "REVEAL" text overlay - will show on hover */}
              <div className="absolute inset-0 z-20 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-bold text-lg text-slate-100 tracking-[0.2em]">REVEAL</span>
              </div>
            </div>
          </div>
          
          {/* Back Face */}
          <div className="absolute w-full h-full rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
             <div
              className={`
                w-full h-full p-4 sm:p-6 
                flex flex-col items-center justify-center rounded-full 
                text-center shadow-2xl ${entry.theme.glowColor}
                ${entry.theme.pattern}
              `}
            >
              <p className="text-xs sm:text-sm text-slate-200">
                {entry.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Default Visible Text */}
      <div className="relative mt-6 px-2">
        <h3 className="text-lg sm:text-xl font-bold text-sky-200 tracking-wide">{entry.technique}</h3>
        <p className="text-base sm:text-lg font-semibold text-slate-100 mt-1">{entry.degree}</p>
        <div className="mt-4 text-sm sm:text-base">
          <p className="font-medium text-slate-300">{entry.institution}</p>
          <p className="text-xs sm:text-sm text-slate-400">{entry.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default MasterySeal;