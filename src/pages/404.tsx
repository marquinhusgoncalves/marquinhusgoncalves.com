import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import NotFound from '../components/NotFound';
import { HeadFC } from 'gatsby';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Titles title={t('pages.notFound.title')} />
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC<{ location?: { pathname: string } }> = ({
  location,
}) => {
  const { t } = useTranslation();

  return (
    <SEO
      title={t('pages.notFound.seoTitle')}
      path={location?.pathname || '/404'}
    />
  );
};
