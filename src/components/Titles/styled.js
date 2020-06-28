import styled from "styled-components"

export const Titles = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.25rem;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--color-blue) 50%, transparent);
    margin-top: 1rem;
  }
`
