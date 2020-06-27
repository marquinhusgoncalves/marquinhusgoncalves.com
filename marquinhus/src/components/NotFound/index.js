import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const NotFound = () => {
  const { notFound } = useStaticQuery(graphql`
    query {
      notFound: file(relativePath: { eq: "not-found.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <S.NotFound fluid={notFound.childImageSharp.fluid} />
      <span>
        Photo by{" "}
        <a href="https://unsplash.com/@mili_vigerova?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Milada Vigerova
        </a>{" "}
        on{" "}
        <a href="/s/photos/cry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </>
  )
}

export default NotFound
