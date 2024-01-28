/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import propTypes from 'prop-types';

import Titles from '../Titles';
import Card from '../Card';

const RelatedPosts = ({ next, previous }: any) => {
  return (
    <>
      <Titles title="Posts Relacionados" />
      {next && <Card title={next.frontmatter.title} slug={next.fields.slug} />}
      {previous && (
        <Card title={previous.frontmatter.title} slug={previous.fields.slug} />
      )}
    </>
  );
};

RelatedPosts.propTypes = {
  next: propTypes.shape({
    Fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    Fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
  }),
};

export default RelatedPosts;
