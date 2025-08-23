import React from 'react';
import { useTranslation } from 'react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const Avatar = () => {
  const { t } = useTranslation();

  return (
    <StaticImage
      src="../../images/marquinhus-goncalves.jpg"
      alt={t('components.avatar.alt')}
      placeholder="blurred"
      width={200}
      height={200}
      style={{ borderRadius: '50%', marginBottom: '2em' }}
    />
  );
};

export default Avatar;
