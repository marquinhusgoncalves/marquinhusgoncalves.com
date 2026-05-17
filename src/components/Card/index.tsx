import React from 'react';

import * as S from './styled';
import ShareButton from '../ShareButton';

interface CardLinkProps {
  slug: string;
  children: React.ReactNode;
  href: string;
}

const CardLink = ({ slug, children, href }: Readonly<CardLinkProps>) =>
  slug ? (
    <S.CardLink to={`${slug}`}>{children}</S.CardLink>
  ) : (
    <S.CardLinkOut href={`${href}`} target="_blank">
      {children}
    </S.CardLinkOut>
  );

interface CardProps {
  title: string;
  slug?: string;
  description?: string;
  href?: string;
}

const Card = ({
  title,
  slug = '',
  description = '',
  href = '',
}: Readonly<CardProps>) => (
  <S.CardWrapper>
    <CardLink slug={slug} href={href}>
      <S.CardTitle>{title}</S.CardTitle>
      {description && <S.CardDescription>{description}</S.CardDescription>}
    </CardLink>

    <ShareButton
      url={slug || href}
      title={title}
      description={description}
      hashtags={[]}
      size="small"
    />
  </S.CardWrapper>
);

export default Card;
