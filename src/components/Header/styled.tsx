import styled from 'styled-components';
import media from 'styled-media-query';

// eslint-disable-next-line import/prefer-default-export
export const HeaderWrapped = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-blue);

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;
