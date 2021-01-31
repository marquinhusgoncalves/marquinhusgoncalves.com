import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SiteTitle from '../SiteTitle';
import MenuBar from '../MenuBar';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const {
    siteMetadata: { title },
  } = site;

  return (
    <S.HeaderWrapped>
      <SiteTitle title={title} />
      <MenuBar />
      <SocialLinks />
    </S.HeaderWrapped>
  );
};

export default Header;
