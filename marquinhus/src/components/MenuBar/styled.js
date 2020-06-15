import styled from "styled-components"
import { Link } from "gatsby"

export const MenuWrapped = styled.nav``

export const MenuLinks = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: 0.5s ease;

  &:hover {
    color: var(--color-white);
  }

  &.active {
    border-bottom: 1px solid var(--color-black);
  }
`
