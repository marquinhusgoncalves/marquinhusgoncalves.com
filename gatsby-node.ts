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
  const postsRequest = await graphql<Queries.Query>(`
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
              tags
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

  const projectsRequest = await graphql<Queries.Query>(`
    query GetAllProjects {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);

  const blogTemplate = path.resolve('./src/templates/post.tsx');
  const posts = postsRequest?.data?.allMarkdownRemark.edges;
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

  const tagTemplate = path.resolve('./src/templates/tag.tsx');

  const createTagPagesForCollection = (
    posts: readonly any[],
    collectionName: string,
  ) => {
    const tagSet = new Set<string>();

    posts.forEach(({ node }) => {
      const tags = (node?.frontmatter as any)?.tags || [];
      tags.forEach((tag: string) => tagSet.add(tag));
    });

    tagSet.forEach((tag) => {
      const postsWithTag = posts.filter(({ node }) => {
        const tags = (node?.frontmatter as any)?.tags || [];
        return tags.includes(tag);
      });

      createPage({
        path: `/${collectionName}/tags/${tag}`,
        component: tagTemplate,
        context: {
          tag,
          posts: postsWithTag,
          collection: collectionName,
        },
      });
    });
  };

  createTagPagesForCollection(posts || [], 'blog');

  createTagPagesForCollection(
    projectsRequest?.data?.allMarkdownRemark.edges || [],
    'projetos',
  );
};
