import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import * as S from '../../styles/pages/privacy.styled';

interface PrivacyPageContext {
  language: string;
}

interface PrivacyData {}

const Privacy: React.FC<PageProps<PrivacyData, PrivacyPageContext>> = ({
  pageContext,
}) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext.language, i18n]);

  const currentPath =
    pageContext.language === 'en'
      ? '/en/newsletter/privacidade'
      : '/newsletter/privacidade';

  return (
    <Layout>
      <Seo
        title={t('pages.privacy.title')}
        description={t('pages.privacy.description')}
        url={currentPath}
      />

      <S.PrivacyContainer>
        <S.PrivacyHeader>
          <S.PrivacyTitle>{t('pages.privacy.title')}</S.PrivacyTitle>
          <S.PrivacyLastUpdated>
            {t('pages.privacy.lastUpdated')}: {t('pages.privacy.date')}
          </S.PrivacyLastUpdated>
        </S.PrivacyHeader>

        <S.PrivacyContent>
          <S.PrivacySection>
            <S.PrivacySectionTitle>
              {t('pages.privacy.section1.title')}
            </S.PrivacySectionTitle>
            <S.PrivacySectionContent>
              {t('pages.privacy.section1.content')}
            </S.PrivacySectionContent>
          </S.PrivacySection>

          <S.PrivacySection>
            <S.PrivacySectionTitle>
              {t('pages.privacy.section2.title')}
            </S.PrivacySectionTitle>
            <S.PrivacySectionContent>
              {t('pages.privacy.section2.content')}
            </S.PrivacySectionContent>
          </S.PrivacySection>

          <S.PrivacySection>
            <S.PrivacySectionTitle>
              {t('pages.privacy.section3.title')}
            </S.PrivacySectionTitle>
            <S.PrivacySectionContent>
              {t('pages.privacy.section3.content')}
            </S.PrivacySectionContent>
          </S.PrivacySection>

          <S.PrivacySection>
            <S.PrivacySectionTitle>
              {t('pages.privacy.section4.title')}
            </S.PrivacySectionTitle>
            <S.PrivacySectionContent>
              {t('pages.privacy.section4.content')}
            </S.PrivacySectionContent>
          </S.PrivacySection>

          <S.PrivacySection>
            <S.PrivacySectionTitle>
              {t('pages.privacy.section5.title')}
            </S.PrivacySectionTitle>
            <S.PrivacySectionContent>
              {t('pages.privacy.section5.content')}
            </S.PrivacySectionContent>
          </S.PrivacySection>

          <S.PrivacySection>
            <S.PrivacySectionTitle>
              {t('pages.privacy.section6.title')}
            </S.PrivacySectionTitle>
            <S.PrivacySectionContent>
              {t('pages.privacy.section6.content')}
            </S.PrivacySectionContent>
          </S.PrivacySection>

          <S.PrivacyContact>
            <S.PrivacyContactTitle>
              {t('pages.privacy.contact.title')}
            </S.PrivacyContactTitle>
            <S.PrivacyContactContent>
              {t('pages.privacy.contact.content')}
            </S.PrivacyContactContent>
          </S.PrivacyContact>
        </S.PrivacyContent>
      </S.PrivacyContainer>
    </Layout>
  );
};

export default Privacy;
