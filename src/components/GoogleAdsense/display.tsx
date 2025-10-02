import React, { useState, useEffect } from 'react';
import AdSense from 'react-adsense';

const AdBlock = () => {
  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    setIsProduction(process.env.NODE_ENV === 'production');
  }, []);

  if (!isProduction) {
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
        [AdSense Display - Desabilitado em desenvolvimento]
      </div>
    );
  }

  return (
    <AdSense.Google
      client="ca-pub-8901672052848512"
      slot="3615186036"
      style={{ display: 'block' }}
      layout="in-article"
      format="auto"
      responsive="true"
    />
  );
};

export default AdBlock;
