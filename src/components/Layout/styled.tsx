import styled from 'styled-components';
import { UpArrowCircle } from '@styled-icons/boxicons-regular/UpArrowCircle';

export const LayoutWrapped = styled.section`
  flex-direction: column;
  display: flex;
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
`;

export const LayoutMainWrapped = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 2rem auto;
  text-align: justify;
  padding: 0 1rem;
  font-size: 1.25rem;
  line-height: 1.58;
  letter-spacing: 0.003em;
  flex-grow: 1;

  a {
    color: var(--color-primary);

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

export const UpArrowCircleWraped = styled.div`
  position: fixed;
  bottom: 2.5rem;
  right: 1rem;
  width: 3rem;
  opacity: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 10;

  &.visible {
    opacity: 1 !important;
  }
`;

export const UpArrowCircleIcon = styled(UpArrowCircle)`
  color: var(--color-primary);
`;
