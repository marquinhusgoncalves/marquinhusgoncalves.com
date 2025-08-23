import styled from 'styled-components';

export const LanguageButton = styled.button`
  background: var(--color-overlay);
  border: 1px solid var(--color-overlay);
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  opacity: 0.8;
  width: 36px;
  height: 36px;
  font-size: 18px;
  line-height: 1;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    background-color: var(--color-overlay-heavy);
    border-color: var(--color-overlay-heavy);
  }
`;
