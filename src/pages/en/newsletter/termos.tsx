import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageProps } from 'gatsby';

import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';
import * as S from '../../../styles/pages/terms.styled';

interface TermsPageContext {
  language: string;
}

interface TermsData {}

const TermsEn: React.FC<PageProps<TermsData, TermsPageContext>> = ({
  pageContext,
}) => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (pageContext.language && i18n.language !== pageContext.language) {
      i18n.changeLanguage(pageContext.language);
    }
  }, [pageContext.language, i18n]);

  const currentPath = '/en/newsletter/termos';

  return (
    <Layout>
      <Seo
        title={t('seo.terms.title')}
        description={t('seo.terms.description')}
        url={currentPath}
      />

      <S.TermsContainer>
        <S.TermsHeader>
          <S.TermsTitle>{t('pages.terms.title')}</S.TermsTitle>
          <S.TermsLastUpdated>
            {t('pages.terms.lastUpdated')}: {t('pages.terms.date')}
          </S.TermsLastUpdated>
        </S.TermsHeader>

        <S.TermsContent>
          <S.TermsSection>
            <S.TermsSectionTitle>
              {t('pages.terms.section1.title')}
            </S.TermsSectionTitle>
            <S.TermsSectionContent>
              {t('pages.terms.section1.content')}
            </S.TermsSectionContent>
          </S.TermsSection>

          <S.TermsSection>
            <S.TermsSectionTitle>
              {t('pages.terms.section2.title')}
            </S.TermsSectionTitle>
            <S.TermsSectionContent>
              {t('pages.terms.section2.content')}
            </S.TermsSectionContent>
          </S.TermsSection>

          <S.TermsSection>
            <S.TermsSectionTitle>
              {t('pages.terms.section3.title')}
            </S.TermsSectionTitle>
            <S.TermsSectionContent>
              {t('pages.terms.section3.content')}
            </S.TermsSectionContent>
          </S.TermsSection>

          <S.TermsSection>
            <S.TermsSectionTitle>
              {t('pages.terms.section4.title')}
            </S.TermsSectionTitle>
            <S.TermsSectionContent>
              {t('pages.terms.section4.content')}
            </S.TermsSectionContent>
          </S.TermsSection>

          <S.TermsSection>
            <S.TermsSectionTitle>
              {t('pages.terms.section5.title')}
            </S.TermsSectionTitle>
            <S.TermsSectionContent>
              {t('pages.terms.section5.content')}
            </S.TermsSectionContent>
          </S.TermsSection>

          <S.TermsSection>
            <S.TermsSectionTitle>
              {t('pages.terms.section6.title')}
            </S.TermsSectionTitle>
            <S.TermsSectionContent>
              {t('pages.terms.section6.content')}
            </S.TermsSectionContent>
          </S.TermsSection>

          <S.TermsContact>
            <S.TermsContactTitle>
              {t('pages.terms.contact.title')}
            </S.TermsContactTitle>
            <S.TermsContactContent>
              {t('pages.terms.contact.content')}
            </S.TermsContactContent>
          </S.TermsContact>
        </S.TermsContent>
      </S.TermsContainer>
    </Layout>
  );
};

export default TermsEn;
