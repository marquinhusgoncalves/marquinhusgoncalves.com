import styled from 'styled-components';

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 450px) {
    gap: 0.75rem;
    padding: 0 0.25rem;
  }
`;
