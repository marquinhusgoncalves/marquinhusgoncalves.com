import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const Footer = () => {
  const { i18n } = useTranslation();

  const getLocalizedUrl = (url: string) => {
    if (i18n.language === 'en' && url !== '/') {
      return `/en${url}`;
    }
    return url;
  };

  return (
    <S.Footer>
      <S.FooterContent>
        <S.HeartIcon />
        <S.NewsletterLink to={getLocalizedUrl('/newsletter')}>
          Assine a newsletter
        </S.NewsletterLink>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
