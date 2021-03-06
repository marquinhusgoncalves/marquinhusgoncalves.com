import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';

const Projetos = ({ data }) => {
  const projectsList = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Projetos" />
      <Titles title="Projetos" />
      {projectsList.map(
        ({
          node: {
            frontmatter: { title, description, href },
          },
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
      sort: { fields: [frontmatter___date], order: DESC }
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
