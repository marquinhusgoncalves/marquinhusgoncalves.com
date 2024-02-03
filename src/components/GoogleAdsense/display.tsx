import React from 'react';
import AdSense from 'react-adsense';

const AdBlock = () => (
  <AdSense.Google
    client="ca-pub-8901672052848512"
    slot="3615186036"
    style={{ display: 'block' }}
    layout="in-article"
    format="auto"
    responsive="true"
  />
);

export default AdBlock;
