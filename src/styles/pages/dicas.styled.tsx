import styled from 'styled-components';

export const DicasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 450px) {
    gap: 0.5rem;
    padding: 0 0.25rem;
  }
`;
