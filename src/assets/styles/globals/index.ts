import { css } from '@emotion/react';
import { Theme } from 'assets/styles/theme';
const GlobalStyle = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');
  * {
    box-sizing: border-box;
  }
  html,
  body,
  button {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', serif;
    font-size: 16px;
  }
  body {
    background-color: ${theme.color.background};
    color: ${theme.color.text};
  }
`;
export default GlobalStyle;
