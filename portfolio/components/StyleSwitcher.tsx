
import React from 'react';
import { DesignStyle } from '../types';

interface StyleSwitcherProps {
  currentStyle: DesignStyle;
  onStyleChange: (style: DesignStyle) => void;
}

const StyleSwitcher: React.FC<StyleSwitcherProps> = ({ currentStyle, onStyleChange }) => {
  const styles: { id: DesignStyle; label: string }[] = [
    { id: 'DEFAULT', label: 'Default' },
    { id: 'MONOLITH', label: 'Monolith' },
    { id: 'REFRACTION', label: 'Glass' },
    { id: 'ARCHIVE', label: 'Terminal' },
    { id: 'NEO_CYBER', label: 'Cyber' },
    { id: 'EDITORIAL', label: 'Dark' },
    { id: 'CURSED', label: 'Cursed' },
    { id: 'VOID', label: 'Void' },
    { id: 'MANGA', label: 'Panel' },
  ];

  const isLight = currentStyle === 'MONOLITH' || currentStyle === 'MANGA';

  return (
    <div className={`fixed bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-[100] backdrop-blur-2xl border p-1 rounded-2xl lg:rounded-full flex gap-1 shadow-2xl transition-all duration-500 max-w-[95vw] overflow-x-auto no-scrollbar ${
      isLight ? 'bg-white/80 border-black/10' : 'bg-black/80 border-white/10'
    }`}>
      {styles.map((style) => (
        <button
          key={style.id}
          onClick={() => onStyleChange(style.id)}
          className={`px-3 lg:px-6 py-2 rounded-xl lg:rounded-full text-[9px] lg:text-[10px] uppercase font-bold tracking-widest transition-all duration-500 whitespace-nowrap ${
            currentStyle === style.id
              ? (isLight ? 'bg-black text-white' : 'bg-white text-black')
              : (isLight ? 'text-black/40 hover:text-black hover:bg-black/5' : 'text-white/40 hover:text-white hover:bg-white/5')
          }`}
        >
          {style.label}
        </button>
      ))}
    </div>
  );
};

export default StyleSwitcher;
