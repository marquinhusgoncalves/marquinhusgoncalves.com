import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Titles from "../components/Titles"
import Card from "../components/Card"

const Blog = ({ data }) => {
  const postList = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <Titles title="Blog" />
      {postList.map(
        ({
          node: {
            frontmatter: { title },
            fields: { slug },
          },
        }) => (
          <Card key={title} title={title} slug={slug} />
        )
      )}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
