import styled from 'styled-components';
import media from 'styled-media-query';

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

  ${media.lessThan('medium')`
    padding: 1rem;
    margin: 1rem 0;
  `}

  ${media.lessThan('small')`
    padding: 0.75rem;
    margin: 0.75rem 0;
  `}
`;
