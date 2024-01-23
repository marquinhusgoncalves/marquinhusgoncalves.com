/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
// import SEO from '../../components/Seo';
import Titles from '../../components/Titles';
import PostInfo from '../../components/PostInfo';
import Comments from '../../components/Comments';
// import RelatedPosts from '../../components/RelatedPosts';

import { MainContent } from '../../styles/base';

const Post = (props: any) => {
  const {
    data: { markdownRemark },
  } = props;

  const {
    frontmatter: { title, date, slug },
    timeToRead,
    html,
  } = markdownRemark;

  return (
    <Layout>
      {/* <SEO title={title} /> */}
      <Titles title={title} />
      <PostInfo date={date} timeToRead={timeToRead} />
      <MainContent>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </MainContent>
      {/* <RelatedPosts next={next} previous={previous} /> */}
      <Comments url={slug} title={title} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        slug
      }
      timeToRead
      html
    }
  }
`;

export default Post;
