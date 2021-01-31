import styled from 'styled-components';
import { Link } from 'gatsby';

const Card = `
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  border: 1px solid var(--color-grey-light);
  padding: 0.6rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  min-height: 5rem;
  position: relative;
  margin: 0.6rem 0;
  color: var(--color-blue);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
`;

export const CardDescription = styled.p``;
