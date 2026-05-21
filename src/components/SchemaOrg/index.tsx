import React from 'react';

interface SchemaOrgProps {
  type: 'website' | 'article' | 'person' | 'organization';
  title: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  tags?: string[];
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({
  type,
  title,
  description,
  url,
  image,
  author,
  datePublished,
  dateModified,
  tags,
}) => {
  const getSchemaData = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      name: title,
      description,
      url,
      ...(image && { image }),
    };

    switch (type) {
      case 'website':
        return {
          ...baseSchema,
          '@type': 'WebSite',
          publisher: {
            '@type': 'Person',
            name: 'Marcus Gonçalves',
            jobTitle: 'Software Engineer',
            url: 'https://www.marquinhusgoncalves.com',
            sameAs: [
              'https://github.com/marquinhusgoncalves',
              'https://linkedin.com/in/marquinhusgoncalves',
            ],
          },
        };

      case 'article':
        return {
          ...baseSchema,
          '@type': 'Article',
          author: {
            '@type': 'Person',
            name: author || 'Marcus Gonçalves',
            url: 'https://www.marquinhusgoncalves.com',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Marcus Gonçalves',
            url: 'https://www.marquinhusgoncalves.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.marquinhusgoncalves.com/assets/img/blog-image.jpg',
            },
          },
          ...(datePublished && { datePublished }),
          ...(dateModified && { dateModified }),
          ...(tags && { keywords: tags.join(', ') }),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        };

      case 'person':
        return {
          ...baseSchema,
          '@type': 'Person',
          jobTitle: 'Software Engineer',
          worksFor: {
            '@type': 'Organization',
            name: 'Marcus Gonçalves',
          },
          knowsAbout: [
            'Web Development',
            'React',
            'TypeScript',
            'Gatsby',
            'Software Engineering',
          ],
          sameAs: [
            'https://github.com/marquinhusgoncalves',
            'https://linkedin.com/in/marquinhusgoncalves',
          ],
        };

      case 'organization':
        return {
          ...baseSchema,
          '@type': 'Organization',
          founder: {
            '@type': 'Person',
            name: 'Marcus Gonçalves',
          },
          url: 'https://www.marquinhusgoncalves.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.marquinhusgoncalves.com/assets/img/blog-image.jpg',
          },
        };

      default:
        return baseSchema;
    }
  };

  const schemaData = getSchemaData();

  const getBreadcrumbData = () => {
    if (type !== 'article') return null;

    const siteUrl = 'https://www.marquinhusgoncalves.com';
    let sectionName = 'Blog';
    let sectionUrl = `${siteUrl}/blog`;

    if (url.includes('/dicas/')) {
      sectionName = 'Dicas';
      sectionUrl = `${siteUrl}/dicas`;
    } else if (url.includes('/viagens/')) {
      sectionName = 'Viagens';
      sectionUrl = `${siteUrl}/viagens`;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        {
          '@type': 'ListItem',
          position: 2,
          name: sectionName,
          item: sectionUrl,
        },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    };
  };

  const breadcrumbData = getBreadcrumbData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      )}
    </>
  );
};

export default SchemaOrg;
