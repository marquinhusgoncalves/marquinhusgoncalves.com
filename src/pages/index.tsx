import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Profile from '../components/Profile';
import NewsletterSignup from '../components/NewsletterSignup';

import * as S from '../styles/pages/index.styled';

interface IndexPageContext {
  language: string;
}

const IndexPage: React.FC<PageProps<object, IndexPageContext>> = ({
  pageContext,
}) => {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <Layout>
      <S.IndexContainer>
        <Profile />
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
