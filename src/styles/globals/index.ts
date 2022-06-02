import { css } from '@emotion/react';

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Noto Sans KR', serif;
  }
  html, body {
    margin: 0; padding: 0;
  }
`;
export default GlobalStyle;
