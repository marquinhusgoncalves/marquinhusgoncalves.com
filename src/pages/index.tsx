import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Profile from '../components/Profile';
import NewsletterSignup from '../components/NewsletterSignup';

import * as S from '../styles/pages/index.styled';

interface FeaturedPost {
  node: {
    frontmatter: {
      title: string;
      slug: string;
    };
    fields: {
      collection: string;
    };
    timeToRead: number;
  };
}

interface IndexPageContext {
  language: string;
}

const COLLECTION_LABEL: Record<string, string> = {
  posts: 'menu.blog',
  viagens: 'menu.travels',
  dicas: 'menu.tips',
};

const IndexPage: React.FC<PageProps<object, IndexPageContext>> = ({
  pageContext,
}) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  const data = useStaticQuery(graphql`
    query FeaturedPosts {
      allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: true } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
            fields {
              collection
            }
            timeToRead
          }
        }
      }
    }
  `);

  const featuredPosts: FeaturedPost[] = data.allMarkdownRemark.edges;

  const getPostSlug = ({ node }: FeaturedPost) => {
    const { collection } = node.fields;
    const { slug } = node.frontmatter;
    const base = collection === 'viagens' ? '/viagens' : '/blog';
    return `${base}${slug.startsWith('/') ? slug : `/${slug}`}`;
  };

  return (
    <Layout>
      <S.IndexContainer>
        <Profile />
        {featuredPosts.length > 0 && (
          <S.FeaturedSection>
            <S.FeaturedTitle>{t('pages.home.featured')}</S.FeaturedTitle>
            <S.FeaturedGrid>
              {featuredPosts.map((post) => {
                const { node } = post;
                const categoryKey = COLLECTION_LABEL[node.fields.collection];
                return (
                  <S.FeaturedCard
                    key={node.frontmatter.slug}
                    to={getPostSlug(post)}
                  >
                    {categoryKey && (
                      <S.FeaturedCardCategory>
                        {t(categoryKey)}
                      </S.FeaturedCardCategory>
                    )}
                    <S.FeaturedCardTitle>
                      {node.frontmatter.title}
                    </S.FeaturedCardTitle>
                    <S.FeaturedCardMeta>
                      {node.timeToRead} {t('components.postInfo.readingTime')}
                    </S.FeaturedCardMeta>
                  </S.FeaturedCard>
                );
              })}
            </S.FeaturedGrid>
          </S.FeaturedSection>
        )}
        <S.NewsletterSection>
          <NewsletterSignup variant="home" />
        </S.NewsletterSection>
      </S.IndexContainer>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC<object, IndexPageContext> = ({ pageContext }) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <SEO
      title={t('pages.home.title')}
      description={t('pages.home.description')}
      type="person"
      url={`https://www.marquinhusgoncalves.com${pageContext?.language === 'en' ? '/en' : ''}`}
    />
  );
};
