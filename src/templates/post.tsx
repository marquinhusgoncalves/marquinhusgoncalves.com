/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { HeadFC, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import PostInfo from '../components/PostInfo';
import Comments from '../components/Comments';
import RelatedPosts from '../components/RelatedPosts';
import AdsenseArticle from '../components/GoogleAdsense/article';

import { MainContent } from '../styles/base';
import * as S from './post.styled';

const Post = (props: any) => {
  const {
    data: { markdownRemark },
    pageContext: { slug, next, previous },
  } = props;

  const {
    frontmatter: { title, date },
    timeToRead,
    html,
  } = markdownRemark;

  const nextPost = next && {
    fields: {
      slug: `/blog${next.fields.slug}`,
    },
    frontmatter: {
      title: next.frontmatter.title,
    },
  };

  const previousPost = previous && {
    fields: {
      slug: `/blog${previous.fields.slug}`,
    },
    frontmatter: {
      title: previous.frontmatter.title,
    },
  };

  return (
    <Layout>
      <S.PostContainer>
        <Titles title={title} />
        <PostInfo date={date} timeToRead={timeToRead} />
        <MainContent>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainContent>
        <AdsenseArticle />
        <RelatedPosts next={nextPost} previous={previousPost} />
        <Comments url={`/blog${slug}`} title={title} />
      </S.PostContainer>
    </Layout>
  );
};

export const query = graphql`
  query Post($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      timeToRead
      html
    }
  }
`;

export default Post;

export const Head: HeadFC = ({ data }: any) => {
  const title = data?.markdownRemark?.frontmatter?.title || 'Post';
  const date = data?.markdownRemark?.frontmatter?.date;
  const slug = data?.markdownRemark?.frontmatter?.slug;

  return (
    <SEO
      title={title}
      type="article"
      url={`https://www.marquinhusgoncalves.com/blog${slug}`}
      author="Marquinhus Gonçalves"
      datePublished={date}
      dateModified={date}
      tags={['blog', 'desenvolvimento', 'tecnologia']}
    />
  );
};
