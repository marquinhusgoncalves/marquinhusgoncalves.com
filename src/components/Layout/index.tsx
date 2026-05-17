import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import { ThemeProvider } from '../../contexts/ThemeContext';

import * as S from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: Readonly<LayoutProps>) => {
  const [isShowButtonScrollToTop, setIsShowButtonScrollToTop] = useState(false);

  useEffect(() => {
    const listener = () => {
      const showButton = window.scrollY >= 100;
      setIsShowButtonScrollToTop(showButton);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' });

  return (
    <ThemeProvider>
      <S.LayoutWrapped>
        <S.SkipLink href="#main-content">Pular para o conteúdo</S.SkipLink>
        <Header />
        <S.LayoutMainWrapped id="main-content">{children}</S.LayoutMainWrapped>
        <S.UpArrowCircleWraped
          role="button"
          tabIndex={isShowButtonScrollToTop ? 0 : -1}
          aria-label="Voltar ao topo da página"
          onClick={scrollToTop}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToTop();
            }
          }}
          className={isShowButtonScrollToTop ? 'visible' : ''}
        >
          <S.UpArrowCircleIcon />
        </S.UpArrowCircleWraped>
        <Footer />
      </S.LayoutWrapped>
    </ThemeProvider>
  );
};

export default Layout;
