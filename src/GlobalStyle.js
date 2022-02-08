import { createGlobalStyle } from 'styled-components';

// workaround: prettier doesn't format global style
// replace "createGlobalStyle" with "css" to get formatting
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'roboto';
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  // https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  #root {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
    margin: 8px 32px;
  }
`;

export default GlobalStyle;
