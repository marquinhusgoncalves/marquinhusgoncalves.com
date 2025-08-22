/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import AdsenseDisplay from '../components/GoogleAdsense/display';
import TagCloud from '../components/TagCloud';

import * as S from './blog.styled';

const Blog = ({ data }: any) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <S.BlogContainer>
        <Titles title="Blog" />
        {postList.map(
          ({
            node: {
              frontmatter: { title, slug },
            },
          }: {
            node: { frontmatter: { title: string; slug: string } };
          }) => (
            <Card key={title} title={title} slug={`/blog/${slug}`} />
          ),
        )}
        {postList.length > 0 && <AdsenseDisplay />}
        <TagCloud collection="posts" />
      </S.BlogContainer>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default Blog;

export const Head: HeadFC = () => {
  return (
    <SEO
      title="Blog - Marquinhus Gonçalves"
      description="Artigos sobre desenvolvimento web, tecnologia e experiências pessoais. Compartilhando conhecimento e aprendizado na área de software."
      type="website"
      url="https://www.marquinhusgoncalves.com/blog"
    />
  );
};
