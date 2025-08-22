import styled from 'styled-components';
import media from 'styled-media-query';

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.lessThan('medium')`
    gap: 1rem;
    padding: 0 0.5rem;
  `}

  ${media.lessThan('small')`
    gap: 0.75rem;
    padding: 0 0.25rem;
  `}
`;
