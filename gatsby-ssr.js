/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    require('react').createElement('script', {
      key:"darkmode",
      dangerouslySetInnerHTML: {
        __html: `
(() => {
  const setTheme = (isDarkMode) => document.body.dataset.theme = isDarkMode ? 'dark' : 'light';
  let darkMode;
  try {
    const savedSettings = JSON.parse(window.localStorage.getItem('dev-hikun-blog') || '{}');
    if (typeof savedSettings.manualDarkMode !== 'boolean') setTheme(settings.manualDarkMode)
    else setTheme(window.matchMedia('prefers-color-scheme: dark').matches);
  } catch {
    // do nothing
  }
})
        `
      }
    })
  ])
}

