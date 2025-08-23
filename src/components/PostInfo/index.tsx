import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const PostInfo = ({
  date,
  timeToRead,
}: {
  date: string;
  timeToRead: string;
}) => {
  const { t } = useTranslation();

  return (
    <S.PostInfo>
      {date} • {timeToRead} {t('components.postInfo.readingTime')}
    </S.PostInfo>
  );
};

PostInfo.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default PostInfo;
