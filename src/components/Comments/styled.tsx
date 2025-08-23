import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CommentsWrapper = styled.section`
  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0;
  }

  @media (max-width: 450px) {
    padding: 0.75rem;
    margin: 0.75rem 0;
  }
`;
