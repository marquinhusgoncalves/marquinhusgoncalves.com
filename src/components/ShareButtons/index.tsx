import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
} from 'react-share';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
  hashtags?: string[];
  via?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  url,
  title,
  description,
  hashtags = [],
  via,
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const fullUrl = url.startsWith('http')
    ? url
    : `https://www.marquinhusgoncalves.com${url.replace(/\/$/, '')}`;

  const twitterText = `${title} ${hashtags.map((tag) => `#${tag}`).join(' ')}`;
  const emailSubject = `${t('components.shareButtons.emailSubject')} ${title}`;
  const emailBody = `${description}\n\n${t('components.shareButtons.emailBody')} ${fullUrl}`;

  const handleRedditShare = () => {
    const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    setCopied(true);
    setShowMessage(true);

    setTimeout(() => {
      setCopied(false);
      setShowMessage(false);
    }, 2000);
  };

  return (
    <S.ShareButtonsContainer>
      <S.ShareTitle>{t('components.shareButtons.title')}</S.ShareTitle>

      <S.ShareButtonsList>
        <FacebookShareButton url={fullUrl} hashtag="#desenvolvimento">
          <S.ShareButton facebook>
            <S.FacebookIcon />
            <S.ShareButtonText>
              {t('components.shareButtons.facebook')}
            </S.ShareButtonText>
          </S.ShareButton>
        </FacebookShareButton>

        <TwitterShareButton
          url={fullUrl}
          title={twitterText}
          via={via}
          hashtags={hashtags}
        >
          <S.ShareButton twitter>
            <S.TwitterIcon />
            <S.ShareButtonText>
              {t('components.shareButtons.twitter')}
            </S.ShareButtonText>
          </S.ShareButton>
        </TwitterShareButton>

        <LinkedinShareButton
          url={fullUrl}
          title={title}
          summary={description}
          source="Marcus Gonçalves"
        >
          <S.ShareButton linkedin>
            <S.LinkedinIcon />
            <S.ShareButtonText>
              {t('components.shareButtons.linkedin')}
            </S.ShareButtonText>
          </S.ShareButton>
        </LinkedinShareButton>

        <WhatsappShareButton url={fullUrl} title={title}>
          <S.ShareButton whatsapp>
            <S.WhatsappIcon />
            <S.ShareButtonText>
              {t('components.shareButtons.whatsapp')}
            </S.ShareButtonText>
          </S.ShareButton>
        </WhatsappShareButton>

        <EmailShareButton url={fullUrl} subject={emailSubject} body={emailBody}>
          <S.ShareButton email>
            <S.EmailIcon />
            <S.ShareButtonText>
              {t('components.shareButtons.email')}
            </S.ShareButtonText>
          </S.ShareButton>
        </EmailShareButton>

        <S.ShareButton reddit onClick={handleRedditShare}>
          <S.RedditIcon />
          <S.ShareButtonText>
            {t('components.shareButtons.reddit')}
          </S.ShareButtonText>
        </S.ShareButton>

        <TelegramShareButton url={fullUrl} title={title}>
          <S.ShareButton telegram>
            <S.TelegramIcon />
            <S.ShareButtonText>
              {t('components.shareButtons.telegram')}
            </S.ShareButtonText>
          </S.ShareButton>
        </TelegramShareButton>

        <CopyToClipboard text={fullUrl} onCopy={handleCopy}>
          <S.ShareButton copy onClick={handleCopy}>
            <S.CopyIcon />
            <S.ShareButtonText>
              {t('components.shareButtons.copyLink')}
            </S.ShareButtonText>
          </S.ShareButton>
        </CopyToClipboard>
      </S.ShareButtonsList>

      {showMessage && (
        <S.CopyMessage copied={copied}>
          {copied
            ? t('components.shareButtons.copiedMessage')
            : t('components.shareButtons.copyMessage')}
        </S.CopyMessage>
      )}
    </S.ShareButtonsContainer>
  );
};

export default ShareButtons;
