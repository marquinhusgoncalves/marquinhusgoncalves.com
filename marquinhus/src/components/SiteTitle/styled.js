import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const SiteTitleWrapped = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;

  ${media.lessThan("medium")`
  font-size: 1.6rem;
  `}
`

export const SiteTitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
