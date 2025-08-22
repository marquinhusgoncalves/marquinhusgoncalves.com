import styled from 'styled-components';
import media from 'styled-media-query';

// eslint-disable-next-line import/prefer-default-export
export const Titles = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.25rem;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--color-blue) 50%, transparent);
    margin-top: 1rem;
  }

  ${media.lessThan('medium')`
    font-size: 2rem;
    margin-bottom: 1rem;
  `}

  ${media.lessThan('small')`
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  `}
`;
