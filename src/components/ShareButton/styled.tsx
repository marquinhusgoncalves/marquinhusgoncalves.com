import styled from 'styled-components';
import { Facebook, Twitter, Linkedin } from '@styled-icons/boxicons-logos';
import { Reddit, Telegram } from '@styled-icons/fa-brands';
import { Copy } from '@styled-icons/boxicons-solid';

interface IconButtonProps {
  facebook?: boolean;
  twitter?: boolean;
  linkedin?: boolean;
  reddit?: boolean;
  telegram?: boolean;
  copy?: boolean;
  size: 'small' | 'medium';
}

interface ContainerProps {
  size: 'small' | 'medium';
}

export const ShareButtonContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: ${({ size }) => (size === 'small' ? '0.25rem' : '0.5rem')};
  position: relative;

  ${({ size }) =>
    size === 'small' &&
    `
    margin-top: 0.5rem;
  `}
`;

export const IconButton = styled.button<IconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;

  /* Tamanhos baseados na prop size */
  width: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  height: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  padding: ${({ size }) => (size === 'small' ? '4px' : '6px')};

  /* Cores específicas para cada rede social */
  color: ${({ facebook, twitter, linkedin, reddit, telegram, copy }) => {
    if (facebook) return '#1877f2';
    if (twitter) return '#1da1f2';
    if (linkedin) return '#0077b5';
    if (reddit) return '#ff4500';
    if (telegram) return '#0088cc';
    if (copy) return '#6c757d';
    return '#6c757d';
  }};

  &:hover {
    transform: scale(1.1);
    background: ${({ facebook, twitter, linkedin, reddit, telegram, copy }) => {
      if (facebook) return 'rgba(24, 119, 242, 0.1)';
      if (twitter) return 'rgba(29, 161, 242, 0.1)';
      if (linkedin) return 'rgba(0, 119, 181, 0.1)';
      if (reddit) return 'rgba(255, 69, 0, 0.1)';
      if (telegram) return 'rgba(0, 136, 204, 0.1)';
      if (copy) return 'rgba(108, 117, 125, 0.1)';
      return 'rgba(108, 117, 125, 0.1)';
    }};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 2px solid var(--color-overlay-heavy);
    outline-offset: 2px;
  }
`;

// Ícones das redes sociais
export const FacebookIcon = styled(Facebook)`
  width: 100%;
  height: 100%;
  color: inherit;
`;

export const TwitterIcon = styled(Twitter)`
  width: 100%;
  height: 100%;
  color: inherit;
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 100%;
  height: 100%;
  color: inherit;
`;

export const CopyIcon = styled(Copy)`
  width: 100%;
  height: 100%;
  color: inherit;
`;

export const RedditIcon = styled(Reddit)`
  width: 100%;
  height: 100%;
  color: inherit;
`;

export const TelegramIcon = styled(Telegram)`
  width: 100%;
  height: 100%;
  color: inherit;
`;

export const CopyTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-background-tertiary);
  color: var(--color-text);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  z-index: 10;
  margin-bottom: 0.5rem;

  /* Seta do tooltip */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: var(--color-background-tertiary);
  }

  /* Animação de entrada */
  animation: fadeInUp 0.3s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
