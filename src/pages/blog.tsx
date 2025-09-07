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
import NewsletterSignup from '../components/NewsletterSignup';

import * as S from '../styles/pages/blog.styled';

interface BlogPageContext {
  language: string;
}

interface BlogData {
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

const Blog: React.FC<PageProps<BlogData, BlogPageContext>> = ({
  data,
  pageContext,
}) => {
  const { t, i18n } = useTranslation();
  const postList = data.allMarkdownRemark.edges;

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <Layout>
      <S.BlogContainer>
        <Titles title={t('pages.blog.title')} />
        {postList.map(
          ({
            node: {
              frontmatter: { title, slug },
            },
          }: {
            node: { frontmatter: { title: string; slug: string } };
          }) => (
            <Card key={title} title={title} slug={`/blog/${slug}`} />
          ),
        )}
        {postList.length > 0 && <AdsenseDisplay />}
        <NewsletterSignup variant="list-end" />
        <TagCloud collection="posts" />
      </S.BlogContainer>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
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

export const Head: HeadFC<BlogData, BlogPageContext> = ({ pageContext }) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <SEO
      title={t('seo.blog.title')}
      description={t('seo.blog.description')}
      type="website"
      url={`https://www.marquinhusgoncalves.com${pageContext?.language === 'en' ? '/en' : ''}/blog`}
    />
  );
};
