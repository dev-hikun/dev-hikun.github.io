import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import THEME from 'assets/styles/theme';
import useTheme from 'hooks/useTheme';
import GlobalStyle from 'assets/styles/globals';

function WithThemes<T>(Component: React.FC<T>) {
  return (props: React.ComponentProps<React.FC<T>>) => {
    const [theme] = useTheme();
    return (
      <ThemeProvider theme={THEME[theme]}>
        <Global styles={GlobalStyle(THEME[theme])} />
        <Component {...props} />
      </ThemeProvider>
    );
  };
}
export default WithThemes;
