import i18n from './src/i18n';
import GlobalStyles from './src/styles/global';
import { GatsbySSR } from 'gatsby';
import React from 'react';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  const path = props.location?.pathname || '';
  const lang = path.startsWith('/en') ? 'en' : 'pt';
  if (i18n.language !== lang) {
    (i18n as { language: string }).language = lang;
  }
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const HeadComponents = [
    <script
      key="adsense"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8901672052848512"
      crossOrigin="anonymous"
    />,
  ];

  return setHeadComponents(HeadComponents);
};
