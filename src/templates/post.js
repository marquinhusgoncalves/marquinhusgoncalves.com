import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Titles from "../components/Titles"
import PostInfo from "../components/PostInfo"
import Comments from "../components/Comments"
import RelatedPosts from "../components/RelatedPosts"

const Post = props => {
  const post = props.data.markdownRemark
  const title = props.data.markdownRemark.frontmatter.title
  const date = props.data.markdownRemark.frontmatter.date
  const timeToRead = props.data.markdownRemark.timeToRead
  const next = props.pageContext.next
  const previous = props.pageContext.previous

  return (
    <Layout>
      <SEO title={title} />
      <Titles title={title} />
      <PostInfo date={date} timeToRead={timeToRead} />
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <RelatedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

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
`

export default Post
