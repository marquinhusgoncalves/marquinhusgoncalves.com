import styled from 'styled-components';

import { Github } from '@styled-icons/evaicons-solid/Github';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';
import { Rss } from '@styled-icons/boxicons-regular/Rss';

export const SocialLinksWrapped = styled.section`
  display: flex;
`;

export const SocialLink = styled.a`
  padding: 0.3rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    svg {
      color: var(--color-white);
    }

    & .social-links-circle {
      border-color: var(--color-white);
    }
  }
`;

export const SocialLinksCircle = styled.span`
  border: 1px solid var(--color-black);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  transition: border 0.5s ease;
`;

export const GithubIcon = styled(Github)`
  width: 1.2rem;
  color: var(--color-black);
  transition: 0.5s ease;
`;
export const TwitterIcon = styled(Twitter)`
  width: 1.2rem;
  color: var(--color-black);
  transition: 0.5s ease;
`;
export const FacebookIcon = styled(Facebook)`
  width: 1.2rem;
  color: var(--color-black);
  transition: 0.5s ease;
`;
export const LinkedinIcon = styled(Linkedin)`
  width: 1.2rem;
  color: var(--color-black);
  transition: 0.5s ease;
`;
export const InstagramIcon = styled(Instagram)`
  width: 1.2rem;
  color: var(--color-black);
  transition: 0.5s ease;
`;
export const EmailOutlineIcon = styled(EmailOutline)`
  width: 1.2rem;
  color: var(--color-black);
  transition: 0.5s ease;
`;
export const RssIcon = styled(Rss)`
  width: 1.2rem;
  color: var(--color-black);
  transition: 0.5s ease;
`;
