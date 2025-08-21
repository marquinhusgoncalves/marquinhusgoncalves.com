import styled from 'styled-components';
import { Link } from 'gatsby';

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
`;

export const CardDescription = styled.p`
  color: var(--color-text-secondary);
`;
