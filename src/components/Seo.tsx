import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SchemaOrg from './SchemaOrg';

interface SEOProps {
  description?: string;
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
  title,
  image,
  type = 'website',
  url,
  path,
  author,
  datePublished,
  dateModified,
  tags,
}: Readonly<SEOProps>) {
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

  const siteUrl: string = site.siteMetadata.siteUrl;
  const metaDescription = description || site.siteMetadata.description;
  const currentUrl = url || `${siteUrl}${path || ''}`;

  const ogImage = image || `${siteUrl}/assets/img/blog-image.jpg`;

  // Derive language from URL to correctly set html[lang] and og:locale
  const isEnglish = currentUrl.startsWith(`${siteUrl}/en`);
  const htmlLang = isEnglish ? 'en' : 'pt-BR';
  const ogLocale = isEnglish ? 'en_US' : 'pt_BR';

  // hreflang alternate URLs
  const ptUrl = isEnglish
    ? currentUrl.replace(`${siteUrl}/en`, siteUrl) || `${siteUrl}/`
    : currentUrl;
  const enUrl = isEnglish
    ? currentUrl
    : (() => {
        const pathPart = currentUrl.replace(siteUrl, '');
        return `${siteUrl}/en${pathPart === '/' ? '' : pathPart}`;
      })();

  return (
    <>
      <html lang={htmlLang} />
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
      <meta property="og:locale" content={ogLocale} />

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

      {/* hreflang for bilingual content */}
      <link rel="alternate" hrefLang="pt-BR" href={ptUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={ptUrl} />

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

export default SEO;
