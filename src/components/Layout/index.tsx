import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import { ThemeProvider } from '../../contexts/ThemeContext';

import * as S from './styled';

const Layout = ({ children }: { children: React.ReactNode }) => {
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
