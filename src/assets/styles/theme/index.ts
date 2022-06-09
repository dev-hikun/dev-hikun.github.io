import React from 'react';
import colors, { ColorDic } from './colors';

type AdditinalColorKey = 'background' | 'text' | 'link';
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
    text: ColorDic['gray-900'],
    link: ColorDic['blue-500'],
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
    text: colors.white,
    background: colors.gray[900],
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
