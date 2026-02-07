import styled from 'styled-components';

export const HeaderWrapped = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-overlay);
`;

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
