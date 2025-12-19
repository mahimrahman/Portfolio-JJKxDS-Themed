
import React from 'react';
import { ThemeMode } from '../types';

interface Props {
  currentTheme: ThemeMode;
  onToggle: () => void;
}

const ThemeToggle: React.FC<Props> = ({ currentTheme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded border ${
        currentTheme === ThemeMode.JUJUTSU 
          ? 'bg-[#bc13fe]/5 text-[#bc13fe] border-[#bc13fe]/30 hover:bg-[#bc13fe]/10' 
          : 'bg-[#10b981]/5 text-[#10b981] border-[#10b981]/30 hover:bg-[#10b981]/10'
      }`}
    >
      Switch Realm
    </button>
  );
};

export default ThemeToggle;
