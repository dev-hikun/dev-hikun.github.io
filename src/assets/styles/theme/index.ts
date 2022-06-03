import React from 'react';

export interface Theme {
  backgroundColor: string;
}
interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

/**
 * @light-theme
 */
export const light: Theme = {
  backgroundColor: 'red' // not decided yet
}

/**
 * @dark-theme
 */
export const dark: Theme = {
  backgroundColor: 'black' // not decided yet
};

const mode: ThemeGroup = {
  light, dark
};

export default mode;