import styled from 'styled-components';

export const NewsletterEditionContainer = styled.div`
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

export const SubjectLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-primary);
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  margin: 0;
  letter-spacing: 0.069rem;

  @media (max-width: 768px) {
    font-size: 0.825rem;
  }
`;
