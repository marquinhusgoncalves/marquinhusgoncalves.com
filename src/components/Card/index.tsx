import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const CardLink = (props: {slug: string, children: React.ReactNode, href: string}) => {
  const { slug, children, href } = props;
  return slug ? (
    <S.CardLink to={`${slug}`}>{children}</S.CardLink>
  ) : (
    <S.CardLinkOut href={`${href}`} target="_blank">
      {children}
    </S.CardLinkOut>
  );
};

const Card = ({ title, slug, description, href }: {title: string, slug: string, description: string, href: string}) => (
  <CardLink slug={slug} href={href}>
    <S.CardTitle>{title}</S.CardTitle>
    {description && <S.CardDescription>{description}</S.CardDescription>}
  </CardLink>
);

Card.defaultProps = {
  slug: ``,
  description: ``,
  href: ``,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};

export default Card;
