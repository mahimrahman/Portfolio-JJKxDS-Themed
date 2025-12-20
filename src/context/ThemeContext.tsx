import React, { createContext, useContext, useState, ReactNode } from 'react';

export enum ThemeMode {
  YUJI = 'YUJI',
  GOJO = 'GOJO',
  TANJIRO = 'TANJIRO',
  ZENITSU = 'ZENITSU',
  INOSUKE = 'INOSUKE'
}

interface ThemeContextType {
  activeTheme: ThemeMode;
  setActiveTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeMode>(ThemeMode.TANJIRO);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
