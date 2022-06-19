import { css } from '@emotion/react';
import theme, { Theme } from 'assets/styles/theme';
import { ColorDic, ColorDicKeys } from '../theme/colors';
const dark = theme['dark'];
const light = theme['light'];

const colorByTheme = (theme: Theme) => `
  --background-color: ${theme.color.background || ''};
  --nav-background-color: ${theme.color.navBackground || ''};
  --text-color: ${theme.color.text || ''};
  --text-hover-color: ${theme.color.textHover || ''};
  --hr-color: ${theme.color.hr || ''};
  --profile-background-color: ${theme.color.profileBackground || ''};
  .text-text: { color: ${theme.color.text || ''} };
`;

const GlobalStyle = css([
  `
      :root {
        ${colorByTheme(light)}
        ${ColorDicKeys.map(key => `--${key}: ${ColorDic[key] || ''}`).join(';')}
      }
      [data-theme="dark"] {
        ${colorByTheme(dark)}
      }
    `,
  `
      * {
        box-sizing: border-box;
      }
      html, body, button, ul {
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-size: 16px;
      }
      body {
        background-color: var(--background-color);
        color: var(--text-color);
      }
      a:link {
        text-decoration: none;
      }
    `,
  {
    '.ripple': {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: `#0000004C`,
      width: 100,
      height: 100,
      marginTop: -50,
      marginLeft: -50,
      animation: 'ripple 1s',
      opacity: 1,
      zIndex: 99999,
    },
  },
  Array.from({ length: 100 }, (_, i) => i).reduce(
    (classes: { [x: string]: any }, i) => ({
      ...classes,
      [`.px-${i}`]: {
        paddingLeft: `${4 * i}px`,
        paddingRight: `${4 * i}px`,
      },
      [`.py-${i}`]: {
        paddingTop: `${4 * i}px`,
        paddingBottom: `${4 * i}px`,
        [`&.button--outlined`]: {
          paddingTop: `${4 * i - 1}px`,
          paddingBottom: `${4 * i - 1}px`,
        },
      },
      [`.px-${i}px`]: {
        paddingLeft: `${i}px`,
        paddingRight: `${i}px`,
      },
      [`.py-${i}px`]: {
        paddingTop: `${i}px`,
        paddingBottom: `${i}px`,
      },
      [`.mt-${i}`]: {
        marginTop: `${4 * i}px`,
      },
      [`.p-${i}`]: {
        padding: `${4 * i}px`,
      },
      [`.m-${i}`]: {
        margin: `${4 * i}px`,
      },
      [`.p-${i}px`]: {
        padding: `${i}px`,
      },
      [`.border-${i}`]: {
        borderWidth: `${i}px`,
      },
    }),
    {},
  ),
  ColorDicKeys.reduce(
    (colorClasses, key) => ({
      ...colorClasses,
      ...['', 'hover', 'active'].reduce((classes, selector) => {
        return {
          ...classes,
          [`.${selector ? `${selector}\\:` : ''}bg-${key}${selector ? `:${selector}` : ''}`]: {
            backgroundColor: ColorDic[key],
          },
        };
      }, {}),
      [`.text-${key}, .text-${key}:visited, .text-${key}:link, .hover\\:text-${key}:hover .active\\:text-${key}:active`]:
        {
          color: ColorDic[key],
        },
      ...['', 'hover', 'active'].reduce((classes, selector) => {
        return {
          ...classes,
          [`.${selector ? `${selector}\\:` : ''}border-${key}${selector ? `:${selector}` : ''}`]: {
            borderColor: ColorDic[key],
          },
        };
      }, {}),
    }),
    {},
  ),
  {
    '.bg-transparent': { background: 'transparent' },
    '.border-solid': { borderStyle: 'solid' },
  },
  `@keyframes ripple {
      from {
        opacity: 1;
        transform: scale(0);
      }
      to {
        opacity: 0;
        transform: scale(10);
      }
  }`,
]);
export default GlobalStyle;
