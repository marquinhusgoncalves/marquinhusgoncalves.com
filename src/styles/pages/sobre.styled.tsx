import styled from 'styled-components';

export const SobreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    text-align: justify;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0 0.5rem;

    p {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 450px) {
    gap: 0.75rem;
    padding: 0 0.25rem;

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;
