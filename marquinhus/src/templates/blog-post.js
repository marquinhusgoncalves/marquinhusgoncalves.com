import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const BlogPost = () => {
  return (
    <Layout>
      <SEO />
      {/* <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent> */}
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      {/* </S.MainContent>
      <RecommendedPost previous={previous} next={next} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} /> */}
    </Layout>
  )
}

// export const query = graphql`
//   query Post($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         description
//         date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
//         image
//       }
//       html
//       timeToRead
//     }
//   }
// `

export default BlogPost
