/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import GlobalStyles from '../../styles/global';
import * as S from './styled';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isShowButtonScrollToTop, setIsShowButtonScrollToTop] = useState(false);

  useEffect(() => {
    const listener = (e: any) => {
      const showButton = e.target.documentElement.scrollTop >= 100;
      setIsShowButtonScrollToTop(showButton);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <S.LayoutWrapped>
      <GlobalStyles />
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
