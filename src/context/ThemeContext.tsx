/**
 * @fileoverview Theme Context for Portfolio Application
 * @description Provides theme state management with anime character themes
 * (Yuji, Gojo, Tanjiro, Zenitsu, Inosuke) for dynamic UI theming
 */
import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Available theme modes based on anime characters
 * Each theme affects the color scheme and visual effects across the portfolio
 */
export enum ThemeMode {
  /** Jujutsu Kaisen - Yuji Itadori theme (Pink/Red) */
  YUJI = 'YUJI',
  /** Jujutsu Kaisen - Gojo Satoru theme (Blue/White) */
  GOJO = 'GOJO',
  /** Demon Slayer - Tanjiro Kamado theme (Green/Red) */
  TANJIRO = 'TANJIRO',
  /** Demon Slayer - Zenitsu Agatsuma theme (Yellow/Orange) */
  ZENITSU = 'ZENITSU',
  /** Demon Slayer - Inosuke Hashibira theme (Blue/Brown) */
  INOSUKE = 'INOSUKE'
}

/**
 * Theme context value shape
 */
interface ThemeContextType {
  /** Currently active theme mode */
  activeTheme: ThemeMode;
  /** Function to update the active theme */
  setActiveTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme Provider Component
 * Wraps application to provide theme state throughout the component tree
 * @param children - Child components to render
 */
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemeMode>(ThemeMode.TANJIRO);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access theme context
 * @throws Error if used outside of ThemeProvider
 * @returns Theme context with activeTheme and setActiveTheme
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
