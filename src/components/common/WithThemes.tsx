import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import THEME from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globals';
import useTheme, { BlogSettingsContext } from 'hooks/useBlogSettings';
import 'assets/styles/globals/index.css';

function WithThemes<T>(Component: React.FC<T>) {
  return (props: React.ComponentProps<React.FC<T>>) => {
    const [isDarkMode, setDarkMode] = useTheme();
    const mode = isDarkMode ? 'dark' : 'light';

    return (
      <BlogSettingsContext.Provider value={{ isDarkMode, setDarkMode }}>
        <ThemeProvider theme={THEME[mode]}>
          <Global styles={GlobalStyle(THEME[mode])} />
          <Component {...props} />
        </ThemeProvider>
      </BlogSettingsContext.Provider>
    );
  };
}
export default WithThemes;
