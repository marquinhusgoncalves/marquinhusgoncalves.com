import styled from "styled-components"

export const SocialLinksWrapped = styled.section`
  display: flex;
`

export const SocialLink = styled.a`
  padding: 0.3rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: 0.5s ease;

  &:hover {
    color: var(--color-white);

    & .social-links-circle {
      border-color: var(--color-white);
    }
  }
`

export const SocialLinksCircle = styled.span`
  border: 1px solid var(--color-black);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  transition: border 0.5s ease;
`
