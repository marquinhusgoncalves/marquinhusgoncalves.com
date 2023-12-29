require('dotenv').config();

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Marquinhus Gonçalves`,
    description: `Blog pessoal`,
    author: `@gmarquinhusgonc`,
    siteUrl: `https://marquinhusgoncalves.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ['123'],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-remark",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "uploads",
      "path": `${__dirname}/static/assets/img`,
    },
    __key: "uploads"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images`,
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posts",
      "path": `${__dirname}/posts`,
    },
    __key: "posts"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "projects",
      "path": `${__dirname}/projects`,
    },
    __key: "projects"
  }]
};

export default config;
