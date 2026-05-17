import React from 'react';
import { useTranslation } from 'react-i18next';

import Titles from '../Titles';
import Card from '../Card';

interface RelatedPost {
  slug: string;
  title: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

const RelatedPosts = ({ posts }: Readonly<RelatedPostsProps>) => {
  const { t } = useTranslation();
  if (!posts || posts.length === 0) return null;
  return (
    <>
      <Titles title={t('components.relatedPosts.title')} />
      {posts.map((post) => (
        <Card key={post.slug} title={post.title} slug={post.slug} />
      ))}
    </>
  );
};

export default RelatedPosts;
