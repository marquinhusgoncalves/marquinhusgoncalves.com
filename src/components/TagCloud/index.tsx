import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import * as S from './styled';

interface TagCloudProps {
  collection?: 'posts' | 'projects' | 'all';
}

const TagCloud: React.FC<TagCloudProps> = ({ collection = 'all' }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query GetAllTags {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              collection
            }
          }
        }
      }
    }
  `);

  const tagCounts = new Map<string, number>();

  allMarkdownRemark.edges.forEach(({ node }: any) => {
    if (collection !== 'all' && node.fields?.collection !== collection) {
      return;
    }

    const tags = node.frontmatter?.tags || [];
    tags.forEach((tag: string) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  const sortedTags = Array.from(tagCounts.entries())
    .sort(([, a], [, b]) => b - a)
    .slice(0, 20);

  if (sortedTags.length === 0) {
    return null;
  }

  const getTagPath = (tag: string) => {
    if (collection === 'posts') return `/blog/tags/${tag}`;
    if (collection === 'projects') return `/projetos/tags/${tag}`;
    return `/blog/tags/${tag}`;
  };

  return (
    <S.TagCloudContainer>
      <S.TagCloudTitle>
        {collection === 'all'
          ? 'Tags populares'
          : collection === 'posts'
            ? 'Tags populares do blog'
            : 'Tags populares dos projetos'}
      </S.TagCloudTitle>
      <S.TagList>
        {sortedTags.map(([tag, count]) => (
          <S.TagItem key={tag}>
            <S.TagLink to={getTagPath(tag)}>
              {tag} <S.TagCount>({count})</S.TagCount>
            </S.TagLink>
          </S.TagItem>
        ))}
      </S.TagList>
    </S.TagCloudContainer>
  );
};

export default TagCloud;
