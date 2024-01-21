import React from 'react';

import * as S from './styled';

const SocialLinks = () => (
  <S.SocialLinksWrapped>
    <S.SocialLink href="mailto:eu@marquinhusgoncalves.com" target="_blank">
      <S.SocialLinksCircle className="social-links-circle">
        <S.EmailOutlineIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://www.linkedin.com/in/marcusviniciusgoncalves"
      target="_blank"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.LinkedinIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink href="https://twitter.com/marquinhusgonc" target="_blank">
      <S.SocialLinksCircle className="social-links-circle">
        <S.TwitterIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink href="https://github.com/marquinhusgoncalves" target="_blank">
      <S.SocialLinksCircle className="social-links-circle">
        <S.GithubIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://facebook.com/marquinhus.goncalves"
      target="_blank"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.FacebookIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://www.instagram.com/marquinhusgoncalves/"
      target="_blank"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <S.InstagramIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
  </S.SocialLinksWrapped>
);

export default SocialLinks;
