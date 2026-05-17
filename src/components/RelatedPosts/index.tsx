import React from 'react';
import { useTranslation } from 'react-i18next';

import Titles from '../Titles';
import Card from '../Card';

interface RelatedPostNode {
  fields: { slug: string };
  frontmatter: { title: string };
}

interface RelatedPostsProps {
  next?: RelatedPostNode | null;
  previous?: RelatedPostNode | null;
}

const RelatedPosts = ({ next, previous }: Readonly<RelatedPostsProps>) => {
  const { t } = useTranslation();
  return (
    <>
      <Titles title={t('components.relatedPosts.title')} />
      {next && <Card title={next.frontmatter.title} slug={next.fields.slug} />}
      {previous && (
        <Card title={previous.frontmatter.title} slug={previous.fields.slug} />
      )}
    </>
  );
};

export default RelatedPosts;
