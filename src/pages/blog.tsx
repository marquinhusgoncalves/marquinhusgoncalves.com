/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import SEO from '../../../src/components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';

const Blog = ({ data }: any) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      {/* <SEO title="Blog" /> */}
      <Titles title="Blog" />
      {postList.map(
        ({
          node: {
            frontmatter: { title, slug },
          },
        }: {
          node: { frontmatter: { title: string; slug: string } };
        }) => (
          <Card key={title} title={title} slug={slug} />
        ),
      )}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default Blog;
