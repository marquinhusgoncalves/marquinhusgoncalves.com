import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: object[];
  }
}

const AdBlock: React.FC = () => {
  const [isProduction, setIsProduction] = useState(false);
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    setIsProduction(true);
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script not loaded
    }
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
        [AdSense Article - Desabilitado em desenvolvimento]
      </div>
    );
  }

  return (
    <ins
      ref={ref}
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-client="ca-pub-8901672052848512"
      data-ad-slot="2190423729"
      data-ad-layout="in-article"
      data-ad-format="fluid"
    />
  );
};

export default AdBlock;
