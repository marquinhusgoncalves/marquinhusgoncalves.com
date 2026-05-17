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

  return (
    <ThemeProvider>
      <S.LayoutWrapped>
        <Header />
        <S.LayoutMainWrapped>{children}</S.LayoutMainWrapped>
        <S.UpArrowCircleWraped
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' });
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
