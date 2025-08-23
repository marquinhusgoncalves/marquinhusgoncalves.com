import React from 'react';
import { useTranslation } from 'react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <StaticImage
        src="../../images/not-found.jpg"
        alt="Not Found image"
        placeholder="blurred"
        style={{ display: 'block' }}
      />

      <span>
        {t('pages.notFound.photoBy')}{' '}
        <a href="https://unsplash.com/@mili_vigerova?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Milada Vigerova
        </a>{' '}
        {t('pages.notFound.on')}{' '}
        <a href="/s/photos/cry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </>
  );
};

export default NotFound;
