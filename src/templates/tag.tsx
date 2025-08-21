import React from 'react';
import { HeadFC, graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import { getCollectionConfig, getFullSlug } from '../utils/collections';

interface TagPageProps extends PageProps {
  pageContext: {
    tag: string;
    posts: Array<{
      node: {
        id: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          date?: string;
          description?: string;
        };
      };
    }>;
    collection: string;
  };
}

const TagPage: React.FC<TagPageProps> = ({ pageContext }) => {
  const { tag, posts, collection } = pageContext;

  return (
    <Layout>
      <Titles
        title={`${getCollectionConfig(collection).name} com tag: ${tag}`}
      />
      <div style={{ padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {posts.length} {getCollectionConfig(collection).singular}
          {posts.length !== 1 ? 's' : ''} encontrado
          {posts.length !== 1 ? 's' : ''} com a tag "{tag}"
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          {posts.map(({ node }) => (
            <Card
              key={node.id}
              title={node.frontmatter.title}
              description={node.frontmatter.description || ''}
              slug={getFullSlug(collection, node.fields.slug)}
              href=""
            />
          ))}
        </div>

        {posts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p>Nenhum post encontrado com esta tag.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TagPage;

export const Head: HeadFC = ({ pageContext }: any) => {
  const { tag, collection } = pageContext;
  const collectionConfig = getCollectionConfig(collection);

  return (
    <SEO
      title={`Tag: ${tag} - ${collectionConfig.name} - Marquinhus Gonçalves`}
      description={`${collectionConfig.name} sobre ${tag} no site de Marquinhus Gonçalves. Conteúdo sobre desenvolvimento web, tecnologia e experiências pessoais.`}
      type="website"
      url={`https://www.marquinhusgoncalves.com${collectionConfig.path}/tags/${tag}`}
    />
  );
};
