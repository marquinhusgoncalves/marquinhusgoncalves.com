/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import AdsenseDisplay from '../components/GoogleAdsense/display';
import TagCloud from '../components/TagCloud';

import * as S from '../styles/pages/projetos.styled';

interface ProjetosPageContext {
  language: string;
}

interface ProjetosData {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        frontmatter: {
          title: string;
          description: string;
          href: string;
        };
      };
    }>;
  };
}

const Projetos: React.FC<PageProps<ProjetosData, ProjetosPageContext>> = ({
  data,
  pageContext,
}) => {
  const { t, i18n } = useTranslation();
  const projectsList = data.allMarkdownRemark.edges;

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);
  return (
    <Layout>
      <S.ProjetosContainer>
        <Titles title={t('pages.projects.title')} />
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

export const Head: HeadFC<ProjetosData, ProjetosPageContext> = ({
  pageContext,
}) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <SEO
      title={t('seo.projects.title')}
      description={t('seo.projects.description')}
      type="organization"
      url={`https://www.marquinhusgoncalves.com${pageContext?.language === 'en' ? '/en' : ''}/projetos`}
    />
  );
};
