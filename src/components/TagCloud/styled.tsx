import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

export const TagCloudContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: var(--color-background-secondary);
  border-radius: 8px;
  text-align: center;

  ${media.lessThan('medium')`
    margin: 1.5rem 0;
    padding: 1.5rem;
  `}

  ${media.lessThan('small')`
    margin: 1rem 0;
    padding: 1rem;
  `}
`;

export const TagCloudTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-size: 1.5rem;

  ${media.lessThan('medium')`
    font-size: 1.3rem;
    margin-bottom: 1rem;
  `}

  ${media.lessThan('small')`
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  `}
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  ${media.lessThan('medium')`
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  `}

  ${media.lessThan('small')`
    gap: 0.25rem;
    justify-content: center;
  `}
`;

export const TagItem = styled.span`
  display: inline-block;
`;

export const TagLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: var(--color-white) !important;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--color-primary-dark);
    color: var(--color-white) !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px var(--color-overlay-heavy);
  }

  &:visited {
    color: var(--color-white) !important;
  }

  ${media.lessThan('medium')`
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  `}

  ${media.lessThan('small')`
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  `}
`;

export const TagCount = styled.span`
  opacity: 0.8;
  font-size: 0.8rem;
`;
