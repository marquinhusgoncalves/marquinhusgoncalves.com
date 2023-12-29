import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import SEO from '../components/Seo';
import Titles from '../components/Titles';
import PostInfo from '../components/PostInfo';
import Comments from '../components/Comments';
import RelatedPosts from '../components/RelatedPosts';

import { MainContent } from '../styles/base';

const Post = (props: any) => {
  // const post = props.data.markdownRemark;

  const {
    data: { markdownRemark },
    pageContext: { next, previous },
  } = props;

  const { timeToRead } = markdownRemark;
  const {
    frontmatter: { title, date },
  } = markdownRemark;

  return (
    <Layout>
      {/* <SEO title={title} /> */}
      <Titles title={title} />
      <PostInfo date={date} timeToRead={timeToRead} />
      <MainContent>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </MainContent>
      <RelatedPosts next={next} previous={previous} />
      <Comments
        url={markdownRemark.fields.slug}
        title={markdownRemark.frontmatter.title}
      />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      timeToRead
      html
    }
  }
`;

export default Post;
