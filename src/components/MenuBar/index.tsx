import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const MenuBar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLocalizedUrl = (url: string) => {
    if (i18n.language === 'en' && url !== '/') {
      return `/en${url}`;
    }
    return url;
  };

  const menuLinks = [
    {
      label: t('menu.home'),
      url: '/',
    },
    {
      label: t('menu.about'),
      url: '/sobre',
    },
    {
      label: t('menu.blog'),
      url: '/blog',
    },
    {
      label: t('menu.projects'),
      url: '/projetos',
    },
    {
      label: t('menu.tips'),
      url: '/dicas',
    },
    {
      label: t('menu.travels'),
      url: '/viagens',
    },
    {
      label: t('menu.newsletter'),
      url: '/newsletter',
    },
  ];

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMenu();
    }
  };

  return (
    <>
      <S.MenuWrapped
        id="nav-menu"
        $isMenuOpen={isMenuOpen}
        className={isMenuOpen ? 'open-menu' : ''}
      >
        {menuLinks.map((menuLink) => {
          const { url, label } = menuLink;
          const localizedUrl = getLocalizedUrl(url);
          return (
            <S.MenuLinks key={label} to={localizedUrl} activeClassName="active">
              {label}
            </S.MenuLinks>
          );
        })}
        <S.CloseIconWrapped
          role="button"
          tabIndex={0}
          aria-label="Fechar menu de navegação"
          onClick={openMenu}
          onKeyDown={handleKeyDown}
        >
          <S.CloseOutlineIcon />
        </S.CloseIconWrapped>
      </S.MenuWrapped>
      <S.MenuIconWrapped
        $isMenuOpen={isMenuOpen}
        role="button"
        tabIndex={0}
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
        aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        onClick={openMenu}
        onKeyDown={handleKeyDown}
      >
        <S.MenuIcon />
      </S.MenuIconWrapped>
    </>
  );
};

export default MenuBar;
