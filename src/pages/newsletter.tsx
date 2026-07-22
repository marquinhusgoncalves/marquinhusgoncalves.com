import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Card from '../components/Card';
import NewsletterSignup from '../components/NewsletterSignup';
import * as S from '../styles/pages/newsletter.styled';

interface NewsletterPageContext {
  language: string;
}

interface NewsletterData {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        timeToRead: number;
        fields: { slug: string };
        frontmatter: {
          title: string;
          description: string;
        };
      };
    }>;
  };
}

const Newsletter: React.FC<
  PageProps<NewsletterData, NewsletterPageContext>
> = ({ data, pageContext }) => {
  const { t, i18n } = useTranslation();
  const editions = data.allMarkdownRemark.edges;

  useEffect(() => {
    if (pageContext.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext.language, i18n]);

  const currentPath =
    pageContext.language === 'en' ? '/en/newsletter' : '/newsletter';

  return (
    <Layout>
      <Seo
        title={t('seo.newsletter.title')}
        description={t('seo.newsletter.description')}
        url={currentPath}
      />

      <S.NewsletterPageContainer>
        <S.NewsletterHeader>
          <S.NewsletterTitle>{t('pages.newsletter.title')}</S.NewsletterTitle>
          <S.NewsletterIntro>
            {t('pages.newsletter.content.intro')}
          </S.NewsletterIntro>
        </S.NewsletterHeader>

        <S.NewsletterContent>
          <S.NewsletterSection>
            <NewsletterSignup variant="home" />
          </S.NewsletterSection>

          <S.BenefitsSection>
            <S.BenefitsTitle>
              {t('pages.newsletter.content.benefits')}
            </S.BenefitsTitle>
            <S.BenefitsList>
              <S.BenefitItem>
                {t('pages.newsletter.content.benefit1')}
              </S.BenefitItem>
              <S.BenefitItem>
                {t('pages.newsletter.content.benefit2')}
              </S.BenefitItem>
              <S.BenefitItem>
                {t('pages.newsletter.content.benefit3')}
              </S.BenefitItem>
              <S.BenefitItem>
                {t('pages.newsletter.content.benefit4')}
              </S.BenefitItem>
            </S.BenefitsList>
          </S.BenefitsSection>

          <S.InfoSection>
            <S.InfoText>{t('pages.newsletter.content.frequency')}</S.InfoText>
            <S.PrivacyText>
              {t('pages.newsletter.content.privacy')}
            </S.PrivacyText>
          </S.InfoSection>

          <S.EditionsSection>
            <S.EditionsTitle>
              {t('pages.newsletter.editions.title')}
            </S.EditionsTitle>
            {editions.length > 0 ? (
              editions.map(
                ({
                  node: {
                    timeToRead,
                    fields: { slug },
                    frontmatter: { title, description },
                  },
                }) => (
                  <Card
                    key={slug}
                    title={title}
                    description={description}
                    slug={`${pageContext.language === 'en' ? '/en' : ''}/newsletter${slug}`}
                    timeToRead={timeToRead}
                  />
                ),
              )
            ) : (
              <S.InfoText>{t('pages.newsletter.editions.empty')}</S.InfoText>
            )}
          </S.EditionsSection>
        </S.NewsletterContent>
      </S.NewsletterPageContainer>
    </Layout>
  );
};

export const query = graphql`
  query NewsletterPageQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "newsletter" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

export default Newsletter;
