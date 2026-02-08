import styled from 'styled-components';
import { Link } from 'gatsby';

import { Menu } from '@styled-icons/entypo/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

interface CustomStyleProps {
  $isMenuOpen: boolean;
}

export const MenuWrapped = styled.nav<CustomStyleProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 900px) {
    display: ${(props: { $isMenuOpen: boolean }) =>
      props.$isMenuOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    box-sizing: border-box;
  }

  @media (max-width: 1110px) and (min-width: 901px) {
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;
export const MenuIconWrapped = styled.div<CustomStyleProps>`
  display: none;

  @media (max-width: 900px) {
    display: ${(props: { $isMenuOpen: boolean }) =>
      props.$isMenuOpen ? 'none' : 'block'};
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    cursor: pointer;
    z-index: 1001;
  }
`;
export const MenuIcon = styled(Menu)`
  width: 2.5rem;
  color: var(--color-black);
`;

export const CloseIconWrapped = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    color: var(--color-white);
    z-index: 1000;
  }
`;
export const CloseOutlineIcon = styled(CloseOutline)`
  width: 2.5rem;
  color: var(--color-white);
`;

export const MenuLinks = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: 0.5s ease;

  &:hover {
    color: var(--color-white);
  }

  &.active {
    border-bottom: 1px solid var(--color-black);
  }

  @media (max-width: 1110px) and (min-width: 901px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 900px) {
    transition-duration: 0.5s;
    color: var(--color-white);
    font-size: 2rem;
    display: block;
    text-align: center;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;

    &:hover {
      color: var(--color-blue);
    }

    &.active {
      color: var(--color-blue);
      border-bottom: 1px solid var(--color-blue);
    }
  }

  @media (max-width: 450px) {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 0.25rem 0;
  }
`;
