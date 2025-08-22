import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Card = `
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  padding: 0.6rem;
  box-shadow: var(--shadow-light);
  transition: 0.3s;
  min-height: 5rem;
  position: relative;
  margin: 0.6rem 0;
  color: var(--color-primary);

  &:hover {
    box-shadow: var(--shadow-medium);
    transform: translateY(-2px);
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    padding: 1rem;
    margin: 0.5rem 0;
    min-height: 6rem;
  `}

  ${media.lessThan('small')`
    padding: 0.75rem;
    margin: 0.25rem 0;
    min-height: 5rem;
  `}
`;

export const CardLink = styled(Link)`
  ${Card};
`;

export const CardLinkOut = styled.a`
  ${Card};
`;

export const CardTitle = styled.h1`
  font-weight: 900;
  color: var(--color-text);

  ${media.lessThan('medium')`
    font-size: 1.1rem;
    text-align: center;
  `}

  ${media.lessThan('small')`
    font-size: 1rem;
  `}
`;

export const CardDescription = styled.p`
  color: var(--color-text-secondary);

  ${media.lessThan('medium')`
    font-size: 0.9rem;
    text-align: center;
  `}

  ${media.lessThan('small')`
    font-size: 0.85rem;
  `}
`;
