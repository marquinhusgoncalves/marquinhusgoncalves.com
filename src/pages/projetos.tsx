/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import AdsenseDisplay from '../components/GoogleAdsense/display';
import TagCloud from '../components/TagCloud';

import * as S from '../styles/pages/projetos.styled';

const Projetos = ({ data }: any) => {
  const projectsList = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <S.ProjetosContainer>
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
        {projectsList.length > 0 && <AdsenseDisplay />}
        <TagCloud collection="projects" />
      </S.ProjetosContainer>
    </Layout>
  );
};

export const query = graphql`
  query ProjetosQuery {
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
  return (
    <SEO
      title="Projetos - Marquinhus Gonçalves"
      description="Portfólio de projetos desenvolvidos por Marquinhus Gonçalves."
      type="organization"
      url="https://www.marquinhusgoncalves.com/projetos"
    />
  );
};
