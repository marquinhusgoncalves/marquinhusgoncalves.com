import styled from 'styled-components';
import media from 'styled-media-query';

export const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  ${media.lessThan('medium')`
    gap: 1rem;
    padding: 0 1rem;
  `}

  ${media.lessThan('small')`
    gap: 0.75rem;
    padding: 0 0.5rem;
  `}
`;

export const ProfileTextWrapper = styled.div`
  width: 100%;
  max-width: 770px;
  text-align: center;
`;

export const ProfileText = styled.p`
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.2rem;
  line-height: 1.58;
  letter-spacing: 0.003em;
  font-weight: 700;

  ${media.lessThan('medium')`
    font-size: 1.1rem;
    line-height: 1.5;
  `}

  ${media.lessThan('small')`
    font-size: 1rem;
    line-height: 1.4;
  `}
`;
