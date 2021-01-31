import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const PostInfo = ({ date, timeToRead }) => (
  <S.PostInfo>
    {date} • {timeToRead} min de leitura
  </S.PostInfo>
);

PostInfo.propTypes = {
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default PostInfo;
