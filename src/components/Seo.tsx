import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import SchemaOrg from './SchemaOrg';

interface SEOProps {
  description?: string;
  lang?: string;
  title: string;
  image?: string;
  type?: 'website' | 'article' | 'person' | 'organization';
  url?: string;
  path?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  tags?: string[];
}

function SEO({
  description,
  lang = 'pt-br',
  title,
  image,
  type = 'website',
  url,
  path,
  author,
  datePublished,
  dateModified,
  tags,
}: SEOProps) {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const currentUrl = url || `${site.siteMetadata.siteUrl}${path || ''}`;

  const ogImage =
    image || `${site.siteMetadata.siteUrl}/assets/img/blog-image.jpg`;

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>

      {/* Basic Meta Tags */}
      <meta name="application-name" content="Marcus Gonçalves Website" />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={site.siteMetadata.author} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:type"
        content={type === 'article' ? 'article' : 'website'}
      />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:locale" content={lang} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={site.siteMetadata.author} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Schema.org Structured Data */}
      <SchemaOrg
        type={type}
        title={title}
        description={metaDescription}
        url={currentUrl}
        image={ogImage}
        author={author}
        datePublished={datePublished}
        dateModified={dateModified}
        tags={tags}
      />
    </>
  );
}

SEO.defaultProps = {
  lang: 'pt-br',
  description: '',
  type: 'website',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article', 'person', 'organization']),
  url: PropTypes.string,
  path: PropTypes.string,
  author: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;
