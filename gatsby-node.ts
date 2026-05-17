import type { GatsbyNode } from 'gatsby';
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  getConfig,
}) => {
  const config = getConfig();
  // Remove Gatsby's built-in ESLint webpack plugin — conflicts with eslint@10
  // Linting is handled by husky + lint-staged on commit
  config.plugins = (config.plugins ?? []).filter(
    (plugin: { constructor: { name: string } }) =>
      plugin.constructor.name !== 'ESLintWebpackPlugin',
  );
  actions.replaceWebpackConfig(config);
};

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
    {
      path: '/newsletter',
      template: path.resolve('./src/pages/newsletter.tsx'),
    },
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
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { frontmatter: { date: DESC } }
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
  const allPosts = posts || [];

  posts?.forEach(({ node }) => {
    const slug = (node?.fields as any)?.slug;
    const currentTags: string[] = (node?.frontmatter as any)?.tags || [];

    const relatedPosts = allPosts
      .filter(({ node: other }) => other.id !== node.id)
      .map(({ node: other }) => {
        const otherTags: string[] = (other?.frontmatter as any)?.tags || [];
        const sharedCount = currentTags.filter((t) =>
          otherTags.includes(t),
        ).length;
        return {
          slug: (other?.fields as any)?.slug as string,
          title: (other?.frontmatter as any)?.title as string,
          sharedCount,
        };
      })
      .sort((a, b) => b.sharedCount - a.sharedCount)
      .slice(0, 3)
      .map(({ slug: s, title }) => ({ slug: s, title }));

    createPage({
      path: `/blog${slug}`,
      component: blogTemplate,
      ownerNodeId: node.id,
      context: {
        id: node.id,
        slug,
        relatedPosts,
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
        relatedPosts,
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
