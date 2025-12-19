
import React, { useState } from 'react';
import { ThemeMode } from './types';
import ContactSection from './components/ContactSection';
import ThemeToggle from './components/ThemeToggle';
import BackgroundFX from './components/BackgroundFX';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.JUJUTSU);

  const toggleTheme = () => {
    setTheme(prev => prev === ThemeMode.JUJUTSU ? ThemeMode.SLAYER : ThemeMode.JUJUTSU);
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-1000 flex flex-col ${
      theme === ThemeMode.JUJUTSU ? 'bg-[#0a0510]' : 'bg-[#050a0a]'
    }`}>
      <BackgroundFX theme={theme} />
      
      <header className="relative z-50 px-6 py-8 max-w-5xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 flex items-center justify-center font-black text-xs border ${
                theme === ThemeMode.JUJUTSU ? 'border-[#bc13fe]/50 text-[#bc13fe]' : 'border-[#10b981]/50 text-[#10b981]'
            }`}>
                {theme === ThemeMode.JUJUTSU ? '呪' : '滅'}
            </div>
        </div>
        <ThemeToggle currentTheme={theme} onToggle={toggleTheme} />
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center py-10 px-6">
        <ContactSection theme={theme} />
      </main>

      <footer className="relative z-50 p-6 text-center opacity-30">
        <p className="text-[10px] uppercase tracking-[0.2em]">Contact Node Sync Active</p>
      </footer>
    </div>
  );
};

export default App;
