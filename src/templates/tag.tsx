import React from 'react';
import { HeadFC, graphql, PageProps } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import Card from '../components/Card';
import { getCollectionConfig, getFullSlug } from '../utils/collections';

import * as S from './tag.styled';

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
  const { t } = useTranslation();
  const { tag, posts, collection } = pageContext;

  return (
    <Layout>
      <Titles
        title={`${getCollectionConfig(collection).name} com tag: ${tag}`}
      />
      <S.TagContainer>
        <S.TagTitle>
          {posts.length} {getCollectionConfig(collection).singular}
          {posts.length !== 1 ? 's' : ''}{' '}
          {posts.length !== 1
            ? t('components.tag.foundWithTagPlural')
            : t('components.tag.foundWithTag')}{' '}
          "{tag}"
        </S.TagTitle>

        <S.TagGrid>
          {posts.map(({ node }) => (
            <Card
              key={node.id}
              title={node.frontmatter.title}
              description={node.frontmatter.description || ''}
              slug={getFullSlug(collection, node.fields.slug)}
              href=""
            />
          ))}
        </S.TagGrid>

        {posts.length === 0 && (
          <S.NoPostsMessage>
            <p>{t('components.tag.noPostsFound')}</p>
          </S.NoPostsMessage>
        )}
      </S.TagContainer>
    </Layout>
  );
};

export default TagPage;

export const Head: HeadFC = ({ pageContext }: any) => {
  const { tag, collection } = pageContext;
  const collectionConfig = getCollectionConfig(collection);

  return (
    <SEO
      title={`Tag: ${tag} - ${collectionConfig.name} - Marcus Gonçalves`}
      description={`${collectionConfig.name} sobre ${tag} no site de Marcus Gonçalves. Conteúdo sobre desenvolvimento web, tecnologia e experiências pessoais.`}
      type="website"
      url={`https://www.marquinhusgoncalves.com${collectionConfig.path}/tags/${tag}`}
    />
  );
};
