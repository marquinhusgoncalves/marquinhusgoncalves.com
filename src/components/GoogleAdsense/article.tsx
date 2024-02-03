import React from 'react';
import AdSense from 'react-adsense';

const AdBlock = () => (
  <AdSense.Google
    client="ca-pub-8901672052848512"
    slot="2190423729"
    style={{ display: 'block', textAlign: 'center' }}
    layout="in-article"
    format="fluid"
  />
);

export default AdBlock;
