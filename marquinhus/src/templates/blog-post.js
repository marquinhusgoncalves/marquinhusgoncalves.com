import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Titles from "../components/Titles"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const title = data.markdownRemark.frontmatter.title
  return (
    <Layout>
      <SEO />
      <Titles title={title} />
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
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
      }
      html
    }
  }
`

export default BlogPost
