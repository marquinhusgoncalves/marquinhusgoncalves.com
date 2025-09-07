import styled from 'styled-components';

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media (max-width: 450px) {
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

export const NewsletterSection = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
