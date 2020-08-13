import React from "react"

import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => (
  <S.ProfileWrapper>
    <Avatar />
    <S.ProfileTextWrapper>
      <S.ProfileText>
        Oi !!! sou o Marquinhus Gonçalves, engenheiro de software, curto viajar,
        escutar música, estudar, praticar esportes, tocar guitarra e violão.
      </S.ProfileText>
      <S.ProfileText>
        Apaixonado por tecnologia, gosto de solucionar problemas e para me
        manter atualizado na área, leio artigos, vou a eventos, conferências e
        meetups sobre temas relacionados.
      </S.ProfileText>
    </S.ProfileTextWrapper>
  </S.ProfileWrapper>
)

export default Profile
