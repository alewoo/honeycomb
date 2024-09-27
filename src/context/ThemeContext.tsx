"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemeStyles = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  dashedBorderColor: string;
};
type ThemeContextType = {
  theme: Theme;
  styles: ThemeStyles;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const styles: ThemeStyles = {
    backgroundColor: theme === 'dark' ? 'bg-black' : 'bg-[#FAFAFA]',
    textColor: theme === 'dark' ? 'text-white' : 'text-black',
    borderColor: theme === 'dark' ? 'border-[#242424]' : 'border-[#e0e0e0]',
    dashedBorderColor: theme === 'dark' ? 'border-[#353535]' : 'border-[#E0E0E0]',
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, styles, toggleTheme }}>
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