import styled from "styled-components"

export const LayoutWrapped = styled.section`
  flex-direction: column;
  display: flex;
  min-height: 100vh;
`

export const LayoutMainWrapped = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 2rem auto;
  text-align: justify;
  padding: 0 1rem;
  font-size: 1.25rem;
  line-height: 1.58;
  letter-spacing: 0.003em;
  flex-grow: 1;

  a {
    color: var(--color-blue);

    &:hover {
      color: var(--color-blue-dark);
    }
  }
`
