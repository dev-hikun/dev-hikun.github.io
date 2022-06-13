import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import THEME from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globals';
import useTheme, { BlogSettingsContext } from 'hooks/useBlogSettings';
import 'assets/styles/globals/index.css';

function WithThemes<T>(Component: React.FC<T>) {
  return (props: React.ComponentProps<React.FC<T>>) => {
    const [isDarkMode, setDarkMode] = useTheme();
    return (
      <BlogSettingsContext.Provider value={{ isDarkMode, setDarkMode }}>
        <ThemeProvider theme={THEME[isDarkMode ? 'dark' : 'light']}>
          <Global styles={GlobalStyle} />
          <Component {...props} />
        </ThemeProvider>
      </BlogSettingsContext.Provider>
    );
  };
}

export async function getServerData() {
  await new Promise(resolve => {
    console.log('server side rendering');
    resolve(undefined);
  });
}
export default WithThemes;
