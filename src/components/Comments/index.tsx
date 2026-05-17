import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactDisqusComments from 'react-disqus-comments';

import Titles from '../Titles';

import * as S from './styled';

interface CommentsProps {
  url: string;
  title: string;
}

const Comments = ({ url, title }: Readonly<CommentsProps>) => {
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

export default Comments;
