import React from 'react';
import AdSense from 'react-adsense';

const AdBlock = () => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <div
        style={{
          padding: '20px',
          border: '1px dashed #ccc',
          textAlign: 'center',
          color: '#666',
          backgroundColor: '#f9f9f9',
        }}
      >
        [AdSense Article - Desabilitado em desenvolvimento]
      </div>
    );
  }

  return (
    <AdSense.Google
      client="ca-pub-8901672052848512"
      slot="2190423729"
      style={{ display: 'block', textAlign: 'center' }}
      layout="in-article"
      format="fluid"
    />
  );
};

export default AdBlock;
