import React from 'react';
import Text from 'components/text';
import Header from 'components/common/Header';
import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from 'assets/styles/globals';
import useTheme from 'hooks/useTheme';
import THEME from 'assets/styles/theme';

const indexPage: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={THEME[theme]}>
      <Global styles={GlobalStyle(THEME[theme])} />
      <Header isDark={theme === 'dark'} themeChanged={toggleTheme} />
      <Text text={`Hello Gatsby`} />
    </ThemeProvider>
  );
};
export default indexPage;
