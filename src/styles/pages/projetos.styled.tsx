import styled from 'styled-components';
import media from 'styled-media-query';

export const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.lessThan('medium')`
    gap: 0.75rem;
    padding: 0 0.5rem;
  `}

  ${media.lessThan('small')`
    gap: 0.5rem;
    padding: 0 0.25rem;
  `}
`;
