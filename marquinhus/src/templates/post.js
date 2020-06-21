import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Titles from "../components/Titles"
import Comments from "../components/Comments"
import PostInfo from "../components/PostInfo"

const Post = ({ data }) => {
  const post = data.markdownRemark
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const timeToRead = data.markdownRemark.timeToRead

  return (
    <Layout>
      <SEO title={title} />
      <Titles title={title} />
      <PostInfo date={date} timeToRead={timeToRead} />
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
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
