import 'lazysizes';
import React, { useEffect } from 'react';
import i18n from './src/i18n';
import GlobalStyles from './src/styles/global';
import { GatsbyBrowser } from 'gatsby';
import 'prismjs/themes/prism.css';

const LanguageSync: React.FC<{
  path: string;
  children: React.ReactNode;
}> = ({ path, children }) => {
  useEffect(() => {
    const lang = path.startsWith('/en') ? 'en' : 'pt';
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [path]);

  return <>{children}</>;
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  const path = props.location?.pathname || '';
  return (
    <>
      <GlobalStyles />
      <LanguageSync path={path}>{element}</LanguageSync>
    </>
  );
};
