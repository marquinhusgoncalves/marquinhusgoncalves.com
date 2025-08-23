import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const SocialLinks = () => {
  const { t } = useTranslation();

  return (
    <S.SocialLinksWrapped>
      <S.SocialLink
        href="mailto:eu@marquinhusgoncalves.com"
        target="_blank"
        aria-label={t('components.socialLinks.email')}
      >
        <S.SocialLinksCircle className="social-links-circle">
          <S.EmailOutlineIcon />
        </S.SocialLinksCircle>
      </S.SocialLink>
      <S.SocialLink
        href="https://www.linkedin.com/in/marcusviniciusgoncalves"
        target="_blank"
        aria-label={t('components.socialLinks.linkedin')}
      >
        <S.SocialLinksCircle className="social-links-circle">
          <S.LinkedinIcon />
        </S.SocialLinksCircle>
      </S.SocialLink>
      <S.SocialLink
        href="https://twitter.com/marquinhusgonc"
        target="_blank"
        aria-label={t('components.socialLinks.twitter')}
      >
        <S.SocialLinksCircle className="social-links-circle">
          <S.TwitterIcon />
        </S.SocialLinksCircle>
      </S.SocialLink>
      <S.SocialLink
        href="https://github.com/marquinhusgoncalves"
        target="_blank"
        aria-label={t('components.socialLinks.github')}
      >
        <S.SocialLinksCircle className="social-links-circle">
          <S.GithubIcon />
        </S.SocialLinksCircle>
      </S.SocialLink>
      <S.SocialLink
        href="https://facebook.com/marquinhus.goncalves"
        target="_blank"
        aria-label={t('components.socialLinks.facebook')}
      >
        <S.SocialLinksCircle className="social-links-circle">
          <S.FacebookIcon />
        </S.SocialLinksCircle>
      </S.SocialLink>
      <S.SocialLink
        href="https://www.instagram.com/marquinhusgoncalves/"
        target="_blank"
        aria-label={t('components.socialLinks.instagram')}
      >
        <S.SocialLinksCircle className="social-links-circle">
          <S.InstagramIcon />
        </S.SocialLinksCircle>
      </S.SocialLink>
      <S.SocialLink
        href="/rss.xml"
        target="_blank"
        aria-label={t('components.socialLinks.rssFeed')}
      >
        <S.SocialLinksCircle className="social-links-circle">
          <S.RssIcon />
        </S.SocialLinksCircle>
      </S.SocialLink>
    </S.SocialLinksWrapped>
  );
};

export default SocialLinks;
