import { useCallback, useState, useEffect } from 'react';
import mode from 'assets/styles/theme';
type themeKey = keyof typeof mode;
const themes: themeKey[] = ['dark', 'light'];
const useTheme = (): [typeof theme, typeof toggleTheme] => {
  const getInitialTheme = useCallback(() => {
    const theme = window.localStorage.getItem('app_theme') as themeKey | undefined;
    const INVALID_THEME = !['dark', 'light'].includes(theme!);
    if (!theme || INVALID_THEME) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
      return matches ? 'dark' : 'light';
    }
    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => themes[Number(prevTheme === 'dark')]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('app_theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
