import React from "react"

import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinksWrapped>
    <S.SocialLink href="mailto:eu@marquinhusgoncalves.com" target="_blank">
      <S.SocialLinksCircle className="social-links-circle">
        <MailOutlineIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="http://br.linkedin.com/in/marcusviniciusgoncalves"
      target="_blank"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <LinkedInIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink href="https://twitter.com/marquinhusgonc" target="_blank">
      <S.SocialLinksCircle className="social-links-circle">
        <TwitterIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink href="https://github.com/marquinhusgoncalves" target="_blank">
      <S.SocialLinksCircle className="social-links-circle">
        <GitHubIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://facebook.com/marquinhus.goncalves"
      target="_blank"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <FacebookIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
    <S.SocialLink
      href="https://www.instagram.com/marquinhusgoncalves/"
      target="_blank"
    >
      <S.SocialLinksCircle className="social-links-circle">
        <InstagramIcon />
      </S.SocialLinksCircle>
    </S.SocialLink>
  </S.SocialLinksWrapped>
)

export default SocialLinks
