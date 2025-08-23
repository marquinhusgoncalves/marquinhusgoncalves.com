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
        <S.ProfileText>
          {t('pages.home.profile.text1')}
        </S.ProfileText>
        <S.ProfileText>
          {t('pages.home.profile.text2')}
        </S.ProfileText>
      </S.ProfileTextWrapper>
    </S.ProfileWrapper>
  );
};

export default Profile;
