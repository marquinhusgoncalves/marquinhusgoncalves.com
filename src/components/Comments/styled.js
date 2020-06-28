import styled from "styled-components"

export const CommentsWrapper = styled.section`
  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }
  }
`
