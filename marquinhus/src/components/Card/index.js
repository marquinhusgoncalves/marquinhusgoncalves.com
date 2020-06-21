import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const CardLink = props => {
  return props.slug ? (
    <S.CardLink to={`/${props.slug}`}>{props.children}</S.CardLink>
  ) : (
    <S.CardLinkOut href={`${props.href}`} target="_blank">
      {props.children}
    </S.CardLinkOut>
  )
}

const Card = ({ title, slug, description, href }) => (
  <CardLink slug={slug} href={href}>
    <S.CardTitle>{title}</S.CardTitle>
    {description && <S.CardDescription>{description}</S.CardDescription>}
  </CardLink>
)

Card.defaultProps = {
  slug: ``,
  description: ``,
  href: ``,
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
}

export default Card
