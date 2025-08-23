import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import AdsenseDisplay from '../components/GoogleAdsense/display';

import * as S from '../styles/pages/sobre.styled';

interface SobrePageContext {
  language: string;
}

const Sobre: React.FC<PageProps<{}, SobrePageContext>> = ({ pageContext }) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <Layout>
      <S.SobreContainer>
        <Titles title={t('pages.about.title')} />
        <div dangerouslySetInnerHTML={{ __html: t('pages.about.content') }} />
        <AdsenseDisplay />
      </S.SobreContainer>
    </Layout>
  );
};

export default Sobre;

export const Head: HeadFC<{}, SobrePageContext> = ({ pageContext }) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext?.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext?.language, i18n]);

  return (
    <SEO
      title={t('seo.about.title')}
      description={t('seo.about.description')}
      type="person"
      url={`https://www.marquinhusgoncalves.com${pageContext?.language === 'en' ? '/en' : ''}/sobre`}
    />
  );
};
