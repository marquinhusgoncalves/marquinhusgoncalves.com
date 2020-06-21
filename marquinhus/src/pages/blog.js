import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Titles from "../components/Titles"
import Card from "../components/Card"

const Blog = ({ data }) => {
  const postList = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO />
      <Titles title={"Blog"} />
      {postList.map(
        ({
          node: {
            frontmatter: { title },
            fields: { slug },
          },
        }) => (
          <Card title={title} slug={slug} />
        )
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Blog
