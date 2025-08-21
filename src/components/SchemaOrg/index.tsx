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
            name: 'Marquinhus Gonçalves',
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
            name: author || 'Marquinhus Gonçalves',
            url: 'https://www.marquinhusgoncalves.com',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Marquinhus Gonçalves',
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
            name: 'Marquinhus Gonçalves',
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
            name: 'Marquinhus Gonçalves',
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaOrg;
