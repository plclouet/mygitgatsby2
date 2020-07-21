/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
      // Update the page.
      createPage(page)
    }
  };

  exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

  
  const getOrdonnances = makeRequest(graphql, `
    {
      allStrapiOrdonnance {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiOrdonnance.edges.forEach(({ node }) => {


      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/ordonnance.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getOrdonnances;

   



};