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

export const ProfileText = styled.p`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.1rem;
  line-height: 1.5;
  letter-spacing: 0.003em;
  font-weight: 700;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }

  @media (max-width: 450px) {
    font-size: 0.95rem;
    line-height: 1.3;
  }
`;
