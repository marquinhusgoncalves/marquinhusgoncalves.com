import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const NotFound = () => {
  return (
    <>
      <StaticImage
        src="../../images/not-found.jpg"
        alt="Not Found image"
        placeholder="blurred"
        style={{ display: 'block' }}
      />

      <span>
        Photo by{' '}
        <a href="https://unsplash.com/@mili_vigerova?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Milada Vigerova
        </a>{' '}
        on{' '}
        <a href="/s/photos/cry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </>
  );
};

export default NotFound;
