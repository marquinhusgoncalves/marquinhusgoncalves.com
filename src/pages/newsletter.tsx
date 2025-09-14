import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NewsletterSignup from '../components/NewsletterSignup';
import * as S from '../styles/pages/newsletter.styled';

interface NewsletterPageContext {
  language: string;
}

interface NewsletterData {}

const Newsletter: React.FC<
  PageProps<NewsletterData, NewsletterPageContext>
> = ({ pageContext }) => {
  const { t, i18n } = useTranslation();

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
        </S.NewsletterContent>
      </S.NewsletterPageContainer>
    </Layout>
  );
};

export default Newsletter;
