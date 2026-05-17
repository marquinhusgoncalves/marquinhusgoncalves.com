import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

interface PostInfoProps {
  date: string;
  timeToRead: string;
}

const PostInfo = ({ date, timeToRead }: Readonly<PostInfoProps>) => {
  const { t } = useTranslation();

  return (
    <S.PostInfo>
      {date} • {timeToRead} {t('components.postInfo.readingTime')}
    </S.PostInfo>
  );
};

export default PostInfo;
