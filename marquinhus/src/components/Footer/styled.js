import styled from "styled-components"
import FavoriteIcon from "@material-ui/icons/Favorite"

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  height: 2.5rem;
`

export const HeartIcon = styled(FavoriteIcon)`
  color: var(--color-blue);
`
