import React from 'react';

import * as S from './styled';

const SocialLinks = () => (
  <S.SocialLinksWrapped>
    <S.SocialLink
      href="mailto:eu@marquinhusgoncalves.com"
      target="_blank"
      aria-label="E-mail"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.EmailOutlineIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://www.linkedin.com/in/marcusviniciusgoncalves"
      target="_blank"
      aria-label="Linkedin"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.LinkedinIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://twitter.com/marquinhusgonc"
      target="_blank"
      aria-label="Twitter"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.TwitterIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://github.com/marquinhusgoncalves"
      target="_blank"
      aria-label="Github"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.GithubIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://facebook.com/marquinhus.goncalves"
      target="_blank"
      aria-label="Facebook"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.FacebookIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://www.instagram.com/marquinhusgoncalves/"
      target="_blank"
      aria-label="Instagram"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.InstagramIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink href="/rss.xml" target="_blank" aria-label="RSS Feed">
      <S.SocialLinksCircle className="social-links-circle">
        <S.RssIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
  </S.SocialLinksWrapped>
);

export default SocialLinks;
