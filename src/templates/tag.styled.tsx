import styled from 'styled-components';

export const TagContainer = styled.div`
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 450px) {
    padding: 1rem 0;
  }
`;

export const TagTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const TagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.75rem;
  }

  @media (max-width: 450px) {
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

export const NoPostsMessage = styled.div`
  text-align: center;
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @media (max-width: 450px) {
    padding: 1.5rem 0;
  }
`;
