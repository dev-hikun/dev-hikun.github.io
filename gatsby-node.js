const path = require('path');

// DSG 방식을 사용할 때 해당 메소드 사용
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
//   createPage({
//     path: '/using-dsg',
//     component: require.resolve('./src/templates/using-dsg.js'),
//     context: {},
//     defer: true,
//   });
// };

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output;
  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },
  });
};
