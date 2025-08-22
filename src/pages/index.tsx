import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Profile from '../components/Profile';

import * as S from './index.styled';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <S.IndexContainer>
        <Profile />
      </S.IndexContainer>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <SEO
      title="Marquinhus Gonçalves - Software Engineer"
      description="Oi! Sou o Marquinhus Gonçalves, engenheiro de software."
      type="person"
      url="https://www.marquinhusgoncalves.com"
    />
  );
};
