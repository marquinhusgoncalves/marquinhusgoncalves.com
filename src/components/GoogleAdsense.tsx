import React, { useEffect } from 'react';

export const Adsense = ({ path }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [path]);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-client="ca-pub-8901672052848512"
      data-ad-slot="<YOUR_GOOGLE_AD_SLOT>"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};
