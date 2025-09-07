import styled from 'styled-components';

export const NewsletterPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const NewsletterHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const NewsletterTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  letter-spacing: 0.069rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.75rem;
  }
`;

export const NewsletterIntro = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
  letter-spacing: 0.069rem;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const NewsletterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const NewsletterSection = styled.section`
  display: flex;
  justify-content: center;
`;

export const BenefitsSection = styled.section`
  background: var(--color-background-secondary);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

export const BenefitsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1.5rem 0;
  text-align: center;
  letter-spacing: 0.069rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const BenefitItem = styled.li`
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  line-height: 1.6;
  letter-spacing: 0.069rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 450px) {
    font-size: 0.95rem;
  }
`;

export const InfoSection = styled.section`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(37, 170, 225, 0.05) 0%,
    rgba(37, 170, 225, 0.1) 100%
  );
  border-radius: 12px;
  border: 1px solid rgba(37, 170, 225, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

export const InfoText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text);
  margin: 0 0 1rem 0;
  line-height: 1.6;
  letter-spacing: 0.069rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const PrivacyText = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
  letter-spacing: 0.069rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;
