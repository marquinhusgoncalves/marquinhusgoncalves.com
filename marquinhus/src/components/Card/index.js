import React from "react"

import * as S from "./styled"

const Card = ({ title, slug }) => (
  <S.CardLink to={`/${slug}`}>
    <S.Card>
      <S.CardTitle>{title}</S.CardTitle>
    </S.Card>
  </S.CardLink>
)

export default Card
