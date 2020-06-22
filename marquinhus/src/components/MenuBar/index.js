import React from "react"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

import * as S from "./styled"

const menuLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Sobre",
    url: "/sobre/",
  },
  {
    label: "Blog",
    url: "/blog/",
  },
  {
    label: "Projetos",
    url: "/projetos/",
  },
]

const MenuBar = () => (
  <>
    <S.MenuWrapped>
      {menuLinks.map(menuLink => {
        const { url, label } = menuLink
        return (
          <S.MenuLinks to={url} activeClassName="active">
            {label}
          </S.MenuLinks>
        )
      })}
      <S.CloseIconWrapped>
        <CloseIcon fontSize="large" />
      </S.CloseIconWrapped>
    </S.MenuWrapped>
    <S.MenuIconWrapped>
      <MenuIcon fontSize="large" />
    </S.MenuIconWrapped>
  </>
)

export default MenuBar
