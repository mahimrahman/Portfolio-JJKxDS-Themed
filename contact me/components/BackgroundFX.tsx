
import React from 'react';
import { ThemeMode } from '../types';

interface Props {
  theme: ThemeMode;
}

const BackgroundFX: React.FC<Props> = ({ theme }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Extremely faint central glow */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        theme === ThemeMode.JUJUTSU 
          ? 'bg-[radial-gradient(circle_at_center,_#0f051a_0%,_#050505_100%)]' 
          : 'bg-[radial-gradient(circle_at_center,_#05120a_0%,_#050505_100%)]'
      }`}></div>

      {/* Subtle halftone overlay */}
      <div className="absolute inset-0 halftone-subtle opacity-40"></div>

      {/* Single very faint corner glow */}
      <div className={`absolute -right-20 -bottom-20 w-[40vw] h-[40vw] rounded-full blur-[150px] opacity-[0.03] ${
          theme === ThemeMode.JUJUTSU ? 'bg-[#bc13fe]' : 'bg-[#10b981]'
      }`}></div>
    </div>
  );
};

export default BackgroundFX;
