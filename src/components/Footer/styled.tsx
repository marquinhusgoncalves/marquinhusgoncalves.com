import styled from 'styled-components';
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

export const HeartIcon = styled(Favorite)`
  width: 1.8rem;
  color: var(--color-primary);
`;
