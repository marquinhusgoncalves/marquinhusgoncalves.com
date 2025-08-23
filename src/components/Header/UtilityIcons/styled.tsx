import styled from 'styled-components';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { Sun } from '@styled-icons/boxicons-regular/Sun';

export const UtilityIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UtilityButton = styled.button`
  background: var(--color-overlay);
  border: 1px solid var(--color-overlay);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  opacity: 0.8;
  min-width: 36px;
  min-height: 36px;
  font-size: 16px;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    background-color: var(--color-overlay-heavy);
    border-color: var(--color-overlay-heavy);
  }
`;

export const MoonIcon = styled(Moon)`
  width: 16px;
  height: 16px;
  color: inherit;
`;

export const SunIcon = styled(Sun)`
  width: 16px;
  height: 16px;
  color: inherit;
`;
