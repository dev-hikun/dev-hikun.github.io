import React from 'react';
import colors, { ColorDic } from './colors';

type AdditinalColorKey = 'background' | 'text' | 'textHover' | 'link' | 'hr' | 'navBackground' | 'profileBackground';
export interface Theme {
  color: Record<AdditinalColorKey, React.CSSProperties['color']> & typeof colors;
  size: {
    siteWidth: number;
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
    background: ColorDic['gray-100'],
    profileBackground: ColorDic['white'],
    navBackground: ColorDic['white-90'],
    text: ColorDic['gray-900'],
    textHover: ColorDic['gray-600'],
    link: ColorDic['blue-500'],
    hr: ColorDic['gray-200'],
    ...colors,
  },
  size: {
    siteWidth: 1200,
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
    background: colors.gray[800],
    profileBackground: colors.gray[700],
    navBackground: ColorDic['black-90'],
    hr: ColorDic['gray-700'],
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
