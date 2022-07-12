/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {

//   setHtmlAttributes({
//     lang: "ko"
//   });

//   console.log(window);

//   setHeadComponents([
//     require('react').createElement('script', {
//       dangerouslySetInnerHTML: {
//         __html: `(() => {
//           const setTheme = (isDarkMode) => {
//             document.body.dataset.theme = isDarkMode ? 'dark' : 'light';
//             console.log('darkMode', isDarkMode);
//           }
//           let darkMode;
//           try {
//             const savedSettings = JSON.parse(window.localStorage.getItem('dev-hikun-blog') || '{}');
//             console.log(savedSettings);
//             if (typeof savedSettings.manualDarkMode !== 'boolean') setTheme(settings.manualDarkMode)
//             else setTheme(window.matchMedia('prefers-color-scheme: dark').matches);
  
//             console.log(savedSettings);
//           } catch {
//             // do nothing
//           }
//         })()`,
//       }
//     })
//   ]);

  // setPreBodyComponents([
  //   require('react').createElement('script', {
  //     key:"darkmode",
  //     dangerouslySetInnerHTML: {
  //       __html: `
  //       `
  //     }
  //   })
  // ])
// }

// exports.onRenderBody = ({ setPreBodyComponents }) => {
//     setPreBodyComponents([
//       require('react').createElement('script', {
//         key:"darkmode",
//         dangerouslySetInnerHTML: {
//           __html: `function _0x5ab5(){const _0x88d26f=['getItem','prefers-color-scheme:\x20dark','15905GLboOh','light','localStorage','264wyxamv','204808cafcvl','dataset','manualDarkMode','parse','3810381Duhjjg','body','203LQALGw','17452182BlflmN','10XbBgQi','6846396NHqXGu','77705eVXfht','77950KbnmXu','1467mkkAGR','matches'];_0x5ab5=function(){return _0x88d26f;};return _0x5ab5();}function _0x3de9(_0x572e74,_0x1bdc89){const _0x5ab508=_0x5ab5();return _0x3de9=function(_0x3de916,_0x1adcd9){_0x3de916=_0x3de916-0xb2;let _0x488cfc=_0x5ab508[_0x3de916];return _0x488cfc;},_0x3de9(_0x572e74,_0x1bdc89);}(function(_0xccb441,_0x286a16){const _0x343832=_0x3de9,_0x5f3d47=_0xccb441();while(!![]){try{const _0x1a8bff=parseInt(_0x343832(0xb6))/0x1*(-parseInt(_0x343832(0xb4))/0x2)+parseInt(_0x343832(0xc4))/0x3+-parseInt(_0x343832(0xbf))/0x4*(parseInt(_0x343832(0xbc))/0x5)+parseInt(_0x343832(0xb5))/0x6+parseInt(_0x343832(0xb2))/0x7*(-parseInt(_0x343832(0xc0))/0x8)+-parseInt(_0x343832(0xb8))/0x9*(-parseInt(_0x343832(0xb7))/0xa)+-parseInt(_0x343832(0xb3))/0xb;if(_0x1a8bff===_0x286a16)break;else _0x5f3d47['push'](_0x5f3d47['shift']());}catch(_0x3d60c7){_0x5f3d47['push'](_0x5f3d47['shift']());}}}(_0x5ab5,0xb828c),()=>{const _0x36b410=_0x3de9,_0x1e92bb=_0x1f8d34=>document[_0x36b410(0xc5)][_0x36b410(0xc1)]['theme']=_0x1f8d34?'dark':_0x36b410(0xbd);let _0x155c74;try{const _0x1f1ccd=JSON[_0x36b410(0xc3)](window[_0x36b410(0xbe)][_0x36b410(0xba)]('dev-hikun-blog')||'{}');if(typeof _0x1f1ccd['manualDarkMode']!=='boolean')_0x1e92bb(settings[_0x36b410(0xc2)]);else _0x1e92bb(window['matchMedia'](_0x36b410(0xbb))[_0x36b410(0xb9)]);}catch{}});`
//         }
//       })
//     ])
//   }
  
  