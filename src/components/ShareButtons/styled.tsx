import styled from 'styled-components';
import {
  Facebook,
  Twitter,
  Linkedin,
  Whatsapp,
} from '@styled-icons/boxicons-logos';
import { Reddit, Telegram } from '@styled-icons/fa-brands';
import { EmailOutline } from '@styled-icons/evaicons-outline';
import { Copy } from '@styled-icons/boxicons-solid';

export const ShareButtonsContainer = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--color-background-secondary);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  text-align: center;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 1rem;
  }

  @media (max-width: 450px) {
    margin: 1rem 0;
    padding: 0.75rem;
  }
`;

export const ShareTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

export const ShareButtonsList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  @media (max-width: 930px) {
    gap: 0.6rem;
  }

  @media (max-width: 520px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.4rem;
    justify-items: center;
    overflow-x: visible;
    padding: 0.5rem;
  }
`;

interface ShareButtonProps {
  facebook?: boolean;
  twitter?: boolean;
  linkedin?: boolean;
  whatsapp?: boolean;
  email?: boolean;
  reddit?: boolean;
  telegram?: boolean;
  copy?: boolean;
}

export const ShareButton = styled.button<ShareButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: var(--color-white);
  min-width: 90px;
  justify-content: center;
  white-space: nowrap;

  /* Cores específicas para cada rede social */
  background: ${({
    facebook,
    twitter,
    linkedin,
    whatsapp,
    email,
    reddit,
    telegram,
    copy,
  }) => {
    if (facebook) return '#1877f2';
    if (twitter) return '#1da1f2';
    if (linkedin) return '#0077b5';
    if (whatsapp) return '#25d366';
    if (email) return '#ea4335';
    if (reddit) return '#ff4500';
    if (telegram) return '#0088cc';
    if (copy) return '#6c757d';
    return '#6c757d';
  }};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 930px) {
    padding: 0.6rem;
    min-width: 48px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  @media (max-width: 520px) {
    padding: 0.5rem;
    min-width: 44px;
    width: 44px;
    height: 44px;
  }
`;

export const ShareButtonText = styled.span`
  font-weight: 500;
  color: inherit;

  @media (max-width: 930px) {
    display: none;
  }
`;

// Ícones das redes sociais
export const FacebookIcon = styled(Facebook)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const TwitterIcon = styled(Twitter)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const WhatsappIcon = styled(Whatsapp)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const EmailIcon = styled(EmailOutline)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CopyIcon = styled(Copy)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const RedditIcon = styled(Reddit)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const TelegramIcon = styled(Telegram)`
  width: 18px;
  height: 18px;
  color: inherit;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CopyMessage = styled.div<{ copied: boolean }>`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  background: ${({ copied }) =>
    copied ? 'var(--color-success)' : 'var(--color-background-tertiary)'};
  color: ${({ copied }) =>
    copied ? 'var(--color-white)' : 'var(--color-text)'};
  border: 1px solid
    ${({ copied }) => (copied ? 'var(--color-success)' : 'var(--color-border)')};
  opacity: ${({ copied }) => (copied ? 1 : 0.8)};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 0.75rem;
    padding: 0.6rem;
    font-size: 0.85rem;
  }

  @media (max-width: 450px) {
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
`;
