import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 450px) {
    gap: 1rem;
  }
`;

export const ProfileTextWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px; /* Mesma altura do avatar */

  @media (max-width: 768px) {
    text-align: center;
    min-height: auto;
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text);
  margin-bottom: 0.35rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ProfileSubtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-primary);
  letter-spacing: 0.02rem;
  margin-bottom: 1rem;
`;

export const ProfileText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.069rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 450px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;
