import React from 'react';

export type ColorVariantKey = '050' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export type AlphaVaraintKey = '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';
export type ThemeColorKey = 'gray' | 'blue' | 'red' | 'green' | 'yellow' | 'purple';
export type GrayscaleKey = 'white' | 'black';
export type ThemeColorVariant = `${ThemeColorKey}-${ColorVariantKey}`;
export type GrayscaleVaraint = `${GrayscaleKey}-${AlphaVaraintKey}`;
const grayscale: Record<GrayscaleKey, Record<AlphaVaraintKey, React.CSSProperties['color']>> = {
  white: {
    10: 'rgba(255, 255, 255, 0.1)',
    20: 'rgba(255, 255, 255, 0.2)',
    30: 'rgba(255, 255, 255, 0.3)',
    40: 'rgba(255, 255, 255, 0.4)',
    50: 'rgba(255, 255, 255, 0.5)',
    60: 'rgba(255, 255, 255, 0.6)',
    70: 'rgba(255, 255, 255, 0.7)',
    80: 'rgba(255, 255, 255, 0.8)',
    90: 'rgba(255, 255, 255, 0.9)',
    100: '#fff',
  },
  black: {
    10: 'rgba(0, 0, 0, 0.1)',
    20: 'rgba(0, 0, 0, 0.2)',
    30: 'rgba(0, 0, 0, 0.3)',
    40: 'rgba(0, 0, 0, 0.4)',
    50: 'rgba(0, 0, 0, 0.5)',
    60: 'rgba(0, 0, 0, 0.6)',
    70: 'rgba(0, 0, 0, 0.7)',
    80: 'rgba(0, 0, 0, 0.8)',
    90: 'rgba(0, 0, 0, 0.9)',
    100: '#000',
  },
};

const colors: Record<ThemeColorKey, Record<ColorVariantKey, React.CSSProperties['color']>> = {
  gray: {
    '050': '#FDFDFD',
    '100': '#F2F2F2',
    '200': '#E4E4E4',
    '300': '#ccc',
    '400': '#a5a5a5',
    '500': '#888',
    '600': '#747474',
    '700': '#616161',
    '800': '#4a4a4a',
    '900': '#202020',
  },
  blue: {
    '050': '#e5f6ff',
    '100': '#b8e4ff',
    '200': '#8ad3ff',
    '300': '#5cc2ff',
    '400': '#2eb1ff',
    '500': '#00A0FF',
    '600': '#0084d2',
    '700': '#0067A4',
    '800': '#004a76',
    '900': '#002d48',
  },
  red: {
    '050': '#f9fbff',
    '100': '#f4cbca',
    '200': '#efaba9',
    '300': '#ea8b88',
    '400': '#e56b67',
    '500': '#e94b46',
    '600': '#b63c38',
    '700': '#8e2e2b',
    '800': '#77201e',
    '900': '#3e1211',
  },
  green: {
    '050': '#f1f9ec',
    '100': '#daedca',
    '200': '#c2e2a8',
    '300': '#aad786',
    '400': '#92cc64',
    '500': '#7AC142',
    '600': '#649f36',
    '700': '#4e7c2a',
    '800': '#38591e',
    '900': '#f1f9ec',
  },
  yellow: {
    '050': '#fffef0',
    '100': '#fff4c0',
    '200': '#ffea90',
    '300': '#ffe060',
    '400': '#ffd730',
    '500': '#ffce00',
    '600': '#d2a800',
    '700': '#a48300',
    '800': '#765e00',
    '900': '#483900',
  },
  purple: {
    '050': '#f3ecf9',
    '100': '#decaed',
    '200': '#c9a8e2',
    '300': '#b486d7',
    '400': '#9F64CC',
    '500': '#8a42c1',
    '600': '#72369f',
    '700': '#592a7c',
    '800': '#401e59',
    '900': '#271236',
  },
};

export type ThemeSemanticColorKey = 'success' | 'info' | 'warning' | 'danger' | 'white';
const semanticColor: Record<ThemeSemanticColorKey, React.CSSProperties['color']> = {
  success: colors.green[500],
  info: colors.blue[500],
  warning: colors.yellow[500],
  danger: colors.red[500],
  white: '#fff',
} as const;

const colorKeys = Object.keys(colors) as ThemeColorKey[];
const getColorVariantKeys = (key: ThemeColorKey) => Object.keys(colors[key]) as ColorVariantKey[];
const getGrayscaleVaraintKeys = (key: GrayscaleKey) => Object.keys(grayscale[key]) as AlphaVaraintKey[];
const kebabColors: Array<ThemeColorVariant> = colorKeys.reduce(
  (arr: ThemeColorVariant[], key) => [
    ...arr,
    ...getColorVariantKeys(key).map<ThemeColorVariant>(vKey => `${key}-${vKey}`),
  ],
  [],
);

const themeColorDic = kebabColors.reduce((obj, kebabKey) => {
  const [key, variant] = kebabKey.split('-') as [ThemeColorKey, ColorVariantKey];
  return { ...obj, [kebabKey]: colors[key][variant] };
}, {}) as Record<ThemeColorVariant, string>;

const kebabGrayScales: Array<GrayscaleVaraint> = (Object.keys(grayscale) as Array<GrayscaleKey>).reduce(
  (arr: GrayscaleVaraint[], key) => [
    ...arr,
    ...getGrayscaleVaraintKeys(key).map<GrayscaleVaraint>(vKey => `${key}-${vKey}`),
  ],
  [],
);

const grayscaleDic = kebabGrayScales.reduce((obj, kebabKey) => {
  const [key, variant] = kebabKey.split('-') as [GrayscaleKey, AlphaVaraintKey];
  return { ...obj, [kebabKey]: grayscale[key][variant] };
}, {}) as Record<GrayscaleVaraint, string>;

export const ColorDic = { ...themeColorDic, ...semanticColor, ...grayscaleDic };
export const ColorDicKeys = Object.keys(ColorDic) as (keyof typeof ColorDic)[];

export default Object.assign(colors, semanticColor, grayscale);
