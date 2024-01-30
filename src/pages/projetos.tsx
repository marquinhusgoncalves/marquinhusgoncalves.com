/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';

const Projetos = ({ data }: any) => {
  const projectsList = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Titles title="Projetos" />
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
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
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

export const Head: HeadFC = () => {
  return <SEO title="Projetos" />;
};
