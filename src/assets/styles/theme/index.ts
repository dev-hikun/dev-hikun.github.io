import colors, { ColorDic } from './colors';

export interface Theme {
  color: {
    background: string;
    text: string;
  } & typeof colors;
  size: {
    siteWidth: number;
  };
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
    text: ColorDic['gray-700'],
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
    text: colors.gray[200],
    background: colors.gray[900],
  },
  size: {
    ...light.size,
  },
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
