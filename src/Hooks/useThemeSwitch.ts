'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useThemeSwitch() {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const storageKey = 'theme';

  const toggleTheme = (theme: Theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      console.warn('Unable to access localStorage:', error);
    }
  };

  const getUserPreference = (): Theme => {
    if (typeof window === 'undefined') {
      return 'light'; // Valeur par défaut côté serveur
    }

    try {
      const userPref = window.localStorage.getItem(storageKey);
      if (userPref === 'dark' || userPref === 'light') {
        return userPref;
      }
    } catch {
      // Ignore errors liées à localStorage
    }

    return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
  };

  const [mode, setMode] = useState<Theme>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange(); // Initialise le thème lors du premier rendu

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    toggleTheme(mode); // Applique le thème à chaque changement
  }, [mode]);

  return [mode, setMode] as const;
}
