/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import AdsenseDisplay from '../components/GoogleAdsense/display';
import NewsletterSignup from '../components/NewsletterSignup';

import * as S from '../styles/pages/viagens.styled';

interface ViagensPageContext {
  language: string;
}

interface ViagensData {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        frontmatter: {
          title: string;
          slug: string;
        };
      };
    }>;
  };
}

const Viagens: React.FC<PageProps<ViagensData, ViagensPageContext>> = ({
  data,
  pageContext,
}) => {
  const { t, i18n } = useTranslation();
  const viagensList = data.allMarkdownRemark.edges;

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <Layout>
      <S.ViagensContainer>
        <Titles title={t('pages.travels.title')} />
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
        <NewsletterSignup variant="list-end" />
      </S.ViagensContainer>
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

export const Head: HeadFC<ViagensData, ViagensPageContext> = ({
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
      title={t('pages.travels.title')}
      description={t('pages.travels.content')}
      type="website"
      url={`https://www.marquinhusgoncalves.com${pageContext?.language === 'en' ? '/en' : ''}/viagens`}
    />
  );
};
