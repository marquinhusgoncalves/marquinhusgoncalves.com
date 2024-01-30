/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  title,
  image,
}: {
  description: string;
  lang: string;
  title: string;
  image?: string;
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  const ogImage =
    image || 'https://marquinhusgoncalves.com/assets/img/blog-image.jpg';

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="aplication-name" content="Marquinhus Gonçalves Website" />
      <meta name="description" content={metaDescription} />
      <meta name="og:imag" content={ogImage} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={ogImage} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="google-adsense-account"
        content="ca-pub-8901672052848512"
      ></meta>
    </>
  );
}

SEO.defaultProps = {
  lang: 'pt-br',
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
