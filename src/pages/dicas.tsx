/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import SEO from '../../../src/components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';

const Projetos = ({ data }: any) => {
  const projectsList = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {/* <SEO title="Dicas" /> */}
      <Titles title="Dicas" />
      {projectsList.map(
        ({
          node: {
            frontmatter: { title, description, href },
          },
        }: {
          node: {
            frontmatter: { title: string; description: string; href: string };
          };
        }) => (
          <Card
            key={title}
            title={title}
            description={description}
            href={href}
          />
        ),
      )}
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
          fields {
            slug
          }
          frontmatter {
            title
            description
            href
          }
        }
      }
    }
  }
`;

export default Projetos;
