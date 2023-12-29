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
`;
