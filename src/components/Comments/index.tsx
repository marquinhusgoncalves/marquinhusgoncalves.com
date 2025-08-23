import React from 'react';
import propTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReactDisqusComments from 'react-disqus-comments';

import Titles from '../Titles';

import * as S from './styled';

const Comments = ({ url, title }: { url: string; title: string }) => {
  const { t } = useTranslation();
  const completeURL = `https://marquinhusgoncalves.com${url}`;
  return (
    <S.CommentsWrapper>
      <Titles title={t('components.comments.title')} />
      <ReactDisqusComments
        shortname="marquinhusgoncalves"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
};

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Comments;
