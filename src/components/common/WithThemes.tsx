import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import THEME from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globals';
import useDarkMode from 'use-dark-mode';
import 'assets/styles/globals/index.css';
import { DarkModeContext } from 'contexts/index';

function WithThemes<T>(Component: React.FC<T>) {
  return (props: React.ComponentProps<React.FC<T>>) => {
    const { toggle, value } = useDarkMode();

    return (
      <DarkModeContext.Provider value={{ isDarkMode: value, toggle }}>
        <ThemeProvider theme={THEME[value ? 'dark' : 'light']}>
          <Global styles={GlobalStyle} />
          <Component {...props} />
        </ThemeProvider>
      </DarkModeContext.Provider>
    );
  };
}
export default WithThemes;
