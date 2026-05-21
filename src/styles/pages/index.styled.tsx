import styled from 'styled-components';
import { Link } from 'gatsby';

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

export const FeaturedSection = styled.section`
  width: 100%;
`;

export const FeaturedTitle = styled.h2`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
`;

export const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.1rem 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background-secondary);
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-light);
    transform: translateY(-2px);
  }
`;

export const FeaturedCardCategory = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
`;

export const FeaturedCardTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text);

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const FeaturedCardMeta = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-top: 0.25rem;
`;

export const NewsletterSection = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
