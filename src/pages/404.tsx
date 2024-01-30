import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import NotFound from '../components/NotFound';
import { HeadFC } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <Titles title="404 - Page not found" />
    <NotFound />
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = () => {
  return <SEO title="Page not found" />;
};
