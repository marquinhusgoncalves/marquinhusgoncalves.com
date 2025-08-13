/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import AdsenseDisplay from '../components/GoogleAdsense/display';

const Viagens = ({ data }: any) => {
  const viagensList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Titles title="Viagens" />
      {viagensList.map(
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
      {viagensList.length > 0 && <AdsenseDisplay />}
    </Layout>
  );
};

export const query = graphql`
  query ViagensQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "viagens" } } }
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

export default Viagens;

export const Head: HeadFC = () => {
  return <SEO title="Viagens" />;
};
