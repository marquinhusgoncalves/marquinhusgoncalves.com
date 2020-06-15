import React from "react"

import * as S from "./styled"

const SiteTitle = ({ title }) => (
  <S.SiteTitleWrapped>
    <S.SiteTitleLink to="/">{title}</S.SiteTitleLink>
  </S.SiteTitleWrapped>
)

export default SiteTitle
