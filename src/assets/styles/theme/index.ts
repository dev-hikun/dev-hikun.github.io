import React from 'react';
import colors, { ColorDic } from './colors';

type AdditinalColorKey =
  | 'background'
  | 'text'
  | 'textHover'
  | 'link'
  | 'hr'
  | 'navBackground'
  | 'blockquote'
  | 'blockquoteBackground'
  | 'contentBackground';
export interface Theme {
  color: Record<AdditinalColorKey, React.CSSProperties['color']> & typeof colors;
  size: {
    siteWidth: number;
    sectionBorderRadius: number;
  };
  isDark?: boolean;
}

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

/**
 * @light-theme
 */
export const light: Theme = {
  color: {
    background: ColorDic['gray-200'],
    navBackground: ColorDic['white-90'],
    text: ColorDic['gray-900'],
    textHover: ColorDic['gray-600'],
    link: ColorDic['blue-500'],
    hr: ColorDic['gray-300'],
    blockquote: ColorDic['gray-400'],
    blockquoteBackground: ColorDic['gray-300'],
    contentBackground: ColorDic['white'],
    ...colors,
  },
  size: {
    siteWidth: 1200,
    sectionBorderRadius: 8,
  },
} as const;

/**
 * @dark-theme
 */
export const dark: Theme = {
  color: {
    ...light.color,
    text: ColorDic['gray-050'],
    textHover: ColorDic['gray-200'],
    background: ColorDic['black-100'],
    navBackground: ColorDic['black-90'],
    blockquote: ColorDic['gray-600'],
    blockquoteBackground: ColorDic['gray-900'],
    hr: ColorDic['gray-800'],
    contentBackground: ColorDic['gray-900'],
  },
  size: {
    ...light.size,
  },
  isDark: true,
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
