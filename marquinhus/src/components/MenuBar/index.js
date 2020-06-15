import React from "react"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuWrapped>
    <S.MenuLinks to="/" activeClassName="active">
      Home
    </S.MenuLinks>
    <S.MenuLinks to="/sobre/" activeClassName="active">
      Sobre
    </S.MenuLinks>
    <S.MenuLinks to="/blog/" activeClassName="active">
      Blog
    </S.MenuLinks>
    <S.MenuLinks to="/projetos/" activeClassName="active">
      Projetos
    </S.MenuLinks>
  </S.MenuWrapped>
)

export default MenuBar
