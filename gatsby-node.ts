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

  const staticPages = [
    { path: '/', template: path.resolve('./src/pages/index.tsx') },
    { path: '/sobre', template: path.resolve('./src/pages/sobre.tsx') },
    { path: '/blog', template: path.resolve('./src/pages/blog.tsx') },
    { path: '/projetos', template: path.resolve('./src/pages/projetos.tsx') },
    { path: '/dicas', template: path.resolve('./src/pages/dicas.tsx') },
    { path: '/viagens', template: path.resolve('./src/pages/viagens.tsx') },
  ];

  staticPages.forEach(({ path, template }) => {
    createPage({
      path,
      component: template,
      context: { language: 'pt' },
    });
  });

  staticPages.forEach(({ path, template }) => {
    if (path !== '/') {
      const enPath = `/en${path}`;
      createPage({
        path: enPath,
        component: template,
        context: { language: 'en' },
      });
    } else {
      createPage({
        path: '/en',
        component: template,
        context: { language: 'en' },
      });
    }
  });

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

  const projectTemplate = path.resolve('./src/templates/post.tsx');
  const projects = projectsRequest?.data?.allMarkdownRemark.edges;
  projects?.forEach(({ node }) => {
    const slug = (node?.fields as any)?.slug;

    createPage({
      path: `/projetos${slug}`,
      component: projectTemplate,
      ownerNodeId: node.id,
      context: {
        id: node.id,
        slug,
        language: 'pt',
      },
    });

    createPage({
      path: `/en/projetos${slug}`,
      component: projectTemplate,
      ownerNodeId: node.id,
      context: {
        id: node.id,
        slug,
        language: 'en',
      },
    });
  });

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
        language: 'pt',
      },
    });

    createPage({
      path: `/en/blog${slug}`,
      component: blogTemplate,
      ownerNodeId: node.id,
      context: {
        id: node.id,
        slug,
        previous: next,
        next: previous,
        language: 'en',
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
