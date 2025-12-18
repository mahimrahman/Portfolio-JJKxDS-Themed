
import React from 'react';
import { ThemeMode } from '../types';
import { THEME_CONFIGS } from '../constants';

interface VisualEffectsProps {
  theme: ThemeMode;
}

const VisualEffects: React.FC<VisualEffectsProps> = ({ theme }) => {
  const config = THEME_CONFIGS[theme];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Background Panels */}
      <div 
        className="absolute inset-0 transition-colors duration-1000 opacity-20"
        style={{ backgroundColor: '#050505' }}
      />
      
      {/* Halftone Texture Overlay */}
      <div 
        className="absolute inset-0 halftone opacity-10 transition-opacity duration-1000"
        style={{ 
          backgroundColor: config.accent,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Action Lines Background */}
      <div className="absolute inset-0 action-lines opacity-40" />

      {/* The "Domain" Glow */}
      <div 
        className="absolute bottom-0 right-0 w-[80vw] h-[80vw] rounded-full blur-[150px] transition-all duration-1000 opacity-30"
        style={{ 
          background: `radial-gradient(circle, ${config.accent} 0%, transparent 70%)`,
          transform: 'translate(20%, 20%)'
        }}
      />

      {/* Tanjiro's Checkerboard Pattern (Subtle for his theme) */}
      {theme === ThemeMode.TANJIRO && (
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(45deg, #00A19D 25%, transparent 25%), 
                          linear-gradient(-45deg, #00A19D 25%, transparent 25%), 
                          linear-gradient(45deg, transparent 75%, #00A19D 75%), 
                          linear-gradient(-45deg, transparent 75%, #00A19D 75%)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 0 50px, 50px 50px, 50px 0'
        }} />
      )}

      {/* Gojo's Blindfold/Infinity High-Contrast Streaks */}
      {theme === ThemeMode.GOJO && (
        <div className="absolute inset-0 flex flex-col justify-around opacity-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-[2px] w-full bg-white shadow-[0_0_20px_white] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      )}

      {/* Zenitsu's Lightning Flicker */}
      {theme === ThemeMode.ZENITSU && (
        <div className="absolute inset-0 bg-white/5 animate-flicker pointer-events-none" />
      )}

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          5%, 7% { opacity: 1; }
          8%, 12% { opacity: 0; }
          13% { opacity: 0.8; }
          14% { opacity: 0; }
        }
        .animate-flicker { animation: flicker 4s infinite; }
      `}</style>
    </div>
  );
};

export default VisualEffects;
