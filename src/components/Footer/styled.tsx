import styled from 'styled-components';
import { Link } from 'gatsby';
import { Favorite } from '@styled-icons/material/Favorite';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-tertiary);
  color: var(--color-text);
  height: 2.5rem;
  border-top: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
    height: auto;
    min-height: 2.5rem;
  }

  @media (max-width: 450px) {
    padding: 0.75rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 450px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const NewsletterLink = styled(Link)`
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
  }

  @media (max-width: 450px) {
    font-size: 0.85rem;
  }
`;

export const HeartIcon = styled(Favorite)`
  width: 1.8rem;
  color: var(--color-primary);
`;
