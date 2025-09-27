import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
} from 'react-share';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

interface ShareButtonProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
  via?: string;
  size?: 'small' | 'medium';
}

const ShareButton: React.FC<ShareButtonProps> = ({
  url,
  title,
  description = '',
  hashtags = [],
  via,
  size = 'medium',
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const fullUrl = url.startsWith('http')
    ? url
    : `https://www.marquinhusgoncalves.com${url.replace(/\/$/, '')}`;

  const twitterText = `${title} ${hashtags.map((tag) => `#${tag}`).join(' ')}`;

  const handleRedditShare = () => {
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <S.ShareButtonContainer size={size}>
      <FacebookShareButton url={fullUrl} hashtag="#desenvolvimento">
        <S.IconButton facebook size={size}>
          <S.FacebookIcon />
        </S.IconButton>
      </FacebookShareButton>

      <TwitterShareButton
        url={fullUrl}
        title={twitterText}
        via={via}
        hashtags={hashtags}
      >
        <S.IconButton twitter size={size}>
          <S.TwitterIcon />
        </S.IconButton>
      </TwitterShareButton>

      <LinkedinShareButton
        url={fullUrl}
        title={title}
        summary={description}
        source="Marcus Gonçalves"
      >
        <S.IconButton linkedin size={size}>
          <S.LinkedinIcon />
        </S.IconButton>
      </LinkedinShareButton>

      <S.IconButton reddit size={size} onClick={handleRedditShare}>
        <S.RedditIcon />
      </S.IconButton>

      <TelegramShareButton url={fullUrl} title={title}>
        <S.IconButton telegram size={size}>
          <S.TelegramIcon />
        </S.IconButton>
      </TelegramShareButton>

      <CopyToClipboard text={fullUrl} onCopy={handleCopy}>
        <S.IconButton copy size={size} onClick={handleCopy}>
          <S.CopyIcon />
        </S.IconButton>
      </CopyToClipboard>

      {copied && (
        <S.CopyTooltip>{t('components.shareButton.linkCopied')}</S.CopyTooltip>
      )}
    </S.ShareButtonContainer>
  );
};

export default ShareButton;
