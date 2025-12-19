
import React from 'react';
import { ThemeMode, SocialLink } from '../types';

interface Props {
  theme: ThemeMode;
  socials: SocialLink[];
}

const SocialGrid: React.FC<Props> = ({ theme, socials }) => {
  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
            theme === ThemeMode.JUJUTSU 
              ? 'border-slate-800 hover:border-[#bc13fe] text-[#bc13fe]/50 hover:text-[#bc13fe]' 
              : 'border-slate-800 hover:border-[#10b981] text-[#10b981]/50 hover:text-[#10b981]'
          }`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d={social.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialGrid;
