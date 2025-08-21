import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SiteTitle from '../SiteTitle';
import MenuBar from '../MenuBar';
import SocialLinks from '../SocialLinks';
import Search from '../Search';
import UtilityIcons from './UtilityIcons';

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
      <S.HeaderTop>
        <S.HeaderLeft>
          <SiteTitle title={title} />
        </S.HeaderLeft>

        <S.HeaderCenter>
          <MenuBar />
        </S.HeaderCenter>

        <S.HeaderRight>
          <Search />
          <UtilityIcons />
        </S.HeaderRight>
      </S.HeaderTop>

      <S.HeaderBottom>
        <SocialLinks />
      </S.HeaderBottom>
    </S.HeaderWrapped>
  );
};

export default Header;
