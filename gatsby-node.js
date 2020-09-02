const path = require(`path`);
const { makeLogPath, makeProjectPath } = require(`./src/utils`);

exports.createPages = async ({ actions, graphql }) => {
  await graphql(`
    {
      bejoistic {
        allPosts {
          edges {
            node {
              id
              slug
            }
          }
        }
        allProjects {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    data.bejoistic.allPosts.edges.forEach(({ node, cursor }) => {
      actions.createPage({
        path: makeLogPath(node),
        component: path.resolve(`./src/components/log-single/index.js`),
        context: {
          id: node.id,
          cursor,
        },
      });
    });

    data.bejoistic.allProjects.edges.forEach(({ node, cursor }) => {
      actions.createPage({
        path: makeProjectPath(node),
        component: path.resolve(`./src/components/project-single/index.js`),
        context: {
          id: node.id,
          cursor,
        },
      });
    });
  });
};
