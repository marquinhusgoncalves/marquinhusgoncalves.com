/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import AdsenseDisplay from '../components/GoogleAdsense/display';

const Dicas = ({ data }: any) => {
  const dicasList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Titles title="Dicas" />
      {dicasList.map(
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
      <AdsenseDisplay />
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "dicas" } } }
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

export default Dicas;

export const Head: HeadFC = () => {
  return <SEO title="Dicas" />;
};
