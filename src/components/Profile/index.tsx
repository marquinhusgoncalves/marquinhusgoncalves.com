import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Avatar from '../Avatar';

import * as S from './styled';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  const title = t('pages.home.profile.text1');
  const subtitle = t('pages.home.profile.text2');

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileTextWrapper>
        {title && <S.ProfileTitle>{title}</S.ProfileTitle>}
        {subtitle && <S.ProfileSubtitle>{subtitle}</S.ProfileSubtitle>}
        <S.ProfileText>{t('pages.home.description')}</S.ProfileText>
      </S.ProfileTextWrapper>
    </S.ProfileWrapper>
  );
};

export default Profile;
