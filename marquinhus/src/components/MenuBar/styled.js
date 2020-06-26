import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const MenuWrapped = styled.nav`
  display: block;

  ${media.lessThan("medium")`
    display: ${props => (props.isMenuOpen ? "flex" : "none")};

    &.open-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;
      z-index: 10;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.9);
      position: absolute;
      top: 0;
      left: 0;
    }
  `}
`
export const MenuIconWrapped = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: block;
    position: absolute;
    right: 1rem;
    top: 0.7rem;
    cursor: pointer;
    `}
`

export const CloseIconWrapped = styled.div`
  display: none;

  ${media.lessThan("medium")`
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: var(--color-white);
  `}
`

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

  ${media.lessThan("medium")`
    transition-duration: 0.5s;
    color: var(--color-white);
    font-size: 40px;
    display: block;
    text-align: center;

    &:hover {
      color: var(--color-blue);
    }

    &.active {
      color: var(--color-blue);
      border-bottom: 1px solid var(--color-blue);
    }
  `}
`
