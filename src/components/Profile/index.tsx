import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Avatar from '../Avatar';

import * as S from './styled';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.ProfileWrapper>
      <Avatar />
      <S.ProfileTextWrapper>
        <S.ProfileText>{t('pages.home.description')}</S.ProfileText>
      </S.ProfileTextWrapper>
    </S.ProfileWrapper>
  );
};

export default Profile;
