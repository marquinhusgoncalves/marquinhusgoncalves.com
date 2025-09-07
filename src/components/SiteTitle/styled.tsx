import styled from 'styled-components';
import { Link } from 'gatsby';

export const SiteTitleWrapped = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 450px) {
    margin-right: 3rem;
  }
`;

export const SiteTitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
