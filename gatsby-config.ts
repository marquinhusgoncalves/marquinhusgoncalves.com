// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import type { GatsbyConfig } from 'gatsby';

// Sentry configuration
const sentryConfig = {
  dsn: process.env.GATSBY_SENTRY_DSN,
  org: process.env.GATSBY_SENTRY_ORG,
  project: process.env.GATSBY_SENTRY_PROJECT,
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Marcus Gonçalves',
    description: 'Marcus Gonçalves Website',
    author: '@marquinhusgonc',
    siteUrl: 'https://www.marquinhusgoncalves.com',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: '@sentry/gatsby',
      options: sentryConfig,
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: process.env.GOOGLE_ANALYTICS_ID
          ? [process.env.GOOGLE_ANALYTICS_ID]
          : [],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Marcus Gonçalves',
        short_name: 'Marcus Gonçalves',
        start_url: '/',
        background_color: '#25AAE1',
        theme_color: '#25AAE1',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/img`,
      },
      __key: 'uploads',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/projects`,
      },
      __key: 'projects',
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }: any) => {
              return allMarkdownRemark.edges.map((edge: any) => {
                const url =
                  site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug;
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: url,
                  guid: url,
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fields: { collection: { eq: "posts" } } }
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Marcus Gonçalves - RSS Feed',
            description:
              'Blog pessoal sobre desenvolvimento web, tecnologia e experiências.',
          },
        ],
      },
    },
  ],
};

export default config;
