/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import type { GatsbyNode } from 'gatsby';
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const collection = getNode(node.parent!)?.sourceInstanceName;

    const slug = createFilePath({
      node,
      getNode,
      basePath: 'content/posts',
    });

    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const request = await graphql<Queries.Query>(`
    query GetAllPosts {
      allMarkdownRemark(filter: { fields: { collection: { eq: "posts" } } }) {
        edges {
          node {
            id
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
  `);

  const blogTemplate = path.resolve('./src/templates/post.tsx');
  const posts = request?.data?.allMarkdownRemark.edges;
  posts?.forEach(({ node, next, previous }) => {
    const slug = (node?.fields as any)?.slug;
    createPage({
      path: `/blog${slug}`,
      component: blogTemplate,
      ownerNodeId: node.id,
      context: {
        id: node.id,
        slug,
        previous: next,
        next: previous,
      },
    });
  });
};
