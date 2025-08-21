import styled from 'styled-components';
import media from 'styled-media-query';

// eslint-disable-next-line import/prefer-default-export
export const HeaderWrapped = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--color-blue);
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    gap: 0.5rem;
  `}
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.lessThan('medium')`
    gap: 0.5rem;
  `}
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const UtilityIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UtilityButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.8;
  min-width: 36px;
  min-height: 36px;
  font-size: 16px;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;
