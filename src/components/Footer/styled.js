import styled from 'styled-components';
import { Favorite } from '@styled-icons/material/Favorite';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  height: 2.5rem;
`;

export const HeartIcon = styled(Favorite)`
  width: 1.8rem;
  color: var(--color-blue);
`;
