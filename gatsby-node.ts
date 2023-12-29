const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    });
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }: any) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(filter: { fields: { collection: { eq: "posts" } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then((result: any) => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node, next, previous }: any) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          previous: next,
          next: previous,
        },
      });
    });
  });
};
