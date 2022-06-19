const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

export default {
  breakpoints: Object.entries(breakpoints).reduce(
    (obj, [key, value]) => ({ ...obj, [key]: `@media (max-width: ${value}px)` }),
    {},
  ) as { [key in keyof typeof breakpoints]: string },
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
};
