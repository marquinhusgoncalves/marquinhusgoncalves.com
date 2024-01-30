import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Profile from '../components/Profile';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return <SEO title="Home" />;
};
