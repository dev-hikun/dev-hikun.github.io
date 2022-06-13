import React from 'react';
import colors, { ColorDic } from './colors';

type AdditinalColorKey = 'background' | 'text' | 'link' | 'hr' | 'navBackground';
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
    background: ColorDic['gray-050'],
    text: ColorDic['gray-900'],
    link: ColorDic['blue-500'],
    hr: ColorDic['gray-200'],
    navBackground: ColorDic['white-70'],
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
    background: colors.gray[900],
    navBackground: ColorDic['black-50'],
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
