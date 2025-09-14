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

import * as S from '../styles/pages/dicas.styled';

interface DicasPageContext {
  language: string;
}

interface DicasData {
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

const Dicas: React.FC<PageProps<DicasData, DicasPageContext>> = ({
  data,
  pageContext,
}) => {
  const { t, i18n } = useTranslation();
  const dicasList = data.allMarkdownRemark.edges;

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <Layout>
      <S.DicasContainer>
        <Titles title={t('pages.tips.title')} />
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
        {dicasList.length > 0 && <AdsenseDisplay />}
        <NewsletterSignup variant="list-end" />
      </S.DicasContainer>
    </Layout>
  );
};

export const query = graphql`
  query DicasQuery {
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

export const Head: HeadFC<DicasData, DicasPageContext> = ({ pageContext }) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <SEO
      title={t('pages.tips.title')}
      description={t('pages.tips.content')}
      type="website"
      url={`https://www.marquinhusgoncalves.com${pageContext?.language === 'en' ? '/en' : ''}/dicas`}
    />
  );
};
