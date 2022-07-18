const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
        contexts: path.resolve(__dirname, 'src/contexts'),
      },
    },
  });
};



// slug page
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: `/posts${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/posts/index.tsx`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}