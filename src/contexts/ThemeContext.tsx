import React, { createContext, useContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../styles/themes';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook para acessar o contexto de tema
 * @returns {ThemeContextType} Objeto com theme e toggleTheme
 * @throws {Error} Se usado fora de um ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Provider do contexto de tema que gerencia o estado global
 * @param {ThemeProviderProps} props - Props do componente
 * @returns {JSX.Element} Provider do contexto
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isClient, setIsClient] = useState(false);

  const applyTheme = (selectedTheme: Theme) => {
    if (typeof window === 'undefined') return;

    const themeVars = selectedTheme === 'light' ? lightTheme : darkTheme;

    Object.entries(themeVars).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });

    document.documentElement.setAttribute('data-theme', selectedTheme);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const savedTheme = localStorage.getItem('theme') as Theme;
    let initialTheme: Theme;

    if (savedTheme) {
      initialTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      initialTheme = prefersDark ? 'dark' : 'light';
    }

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, isClient]);

  const toggleTheme = () => {
    if (!isClient) return;
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
