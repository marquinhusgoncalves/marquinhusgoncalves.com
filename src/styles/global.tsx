import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    font-size: 100%;
    font-family: 'Roboto', sans-serif;

    /* Cores base que não mudam */
    --color-black: #000;
    --color-white: #FFF;

    /* Cores do tema (serão sobrescritas pelo ThemeContext) */
    --color-blue: #25AAE1;
    --color-blue-dark: #1d86af;
    --color-grey-light: #F5F5F5;
    --highlight: #1fa1f2;

    /* Aplicar cores do tema */
    background-color: var(--color-background);
    color: var(--color-text);
  }

  /* Transições suaves para mudança de tema - apenas para elementos que mudam */
  body,
  header,
  footer,
  main,
  .card,
  button,
  input,
  textarea,
  select {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.5s ease;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  /* Estilos específicos para modo escuro */
  [data-theme="dark"] {
    /* Ajustes específicos para dark mode se necessário */
  }

  /* Estilos específicos para modo claro */
  [data-theme="light"] {
    /* Ajustes específicos para light mode se necessário */
  }
`;

export default GlobalStyles;
