import { css } from '@emotion/react';
import { Theme } from 'assets/styles/theme';
import { ColorDic, ColorDicKeys } from '../theme/colors';

const GlobalStyle = (theme: Theme) =>
  css([
    `
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
        background-color: ${theme.color.background || ''};
        color: ${theme.color.text || ''};
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
        opacity: 0,
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
        [`.p-${i}`]: {
          padding: `${4 * i}px`,
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
      '.text-text': { color: theme.color.text },
    },
    `
      @keyframes ripple {
        from {
          opacity: 1;
          transform: scale(0);
        }
        to {
          opacity: 0;
          transform: scale(10);
        }
    `,
  ]);
export default GlobalStyle;
