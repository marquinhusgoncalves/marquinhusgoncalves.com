import { GatsbySSR } from 'gatsby';
import React from 'react';

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
