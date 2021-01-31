import React, { useState } from 'react';

import * as S from './styled';

const menuLinks = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Sobre',
    url: '/sobre/',
  },
  {
    label: 'Blog',
    url: '/blog/',
  },
  {
    label: 'Projetos',
    url: '/projetos/',
  },
];

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <S.MenuWrapped
        isMenuOpen={isMenuOpen}
        className={isMenuOpen ? 'open-menu' : ''}
      >
        {menuLinks.map((menuLink) => {
          const { url, label } = menuLink;
          return (
            <S.MenuLinks key={label} to={url} activeClassName="active">
              {label}
            </S.MenuLinks>
          );
        })}
        <S.CloseIconWrapped onClick={openMenu}>
          <S.CloseOutlineIcon />
        </S.CloseIconWrapped>
      </S.MenuWrapped>
      <S.MenuIconWrapped onClick={openMenu}>
        <S.MenuIcon />
      </S.MenuIconWrapped>
    </>
  );
};

export default MenuBar;
