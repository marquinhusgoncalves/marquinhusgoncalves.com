const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    const collection = getNode(node.parent).sourceInstanceName
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    })
    createNodeField({
      node,
      name: "collection",
      value: collection,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `/${collection}${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
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
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
