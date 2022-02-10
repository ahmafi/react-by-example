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
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  .stopScroll {
    overflow: hidden;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
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

  html {
    background-color: ${({ theme }) => theme.colors.background};
  }

  #root {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
    ${'' /* margin: 0px 32px; */}
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightShadow} inset,
      -3px -3px 4px ${({ theme }) => theme.colors.darkShadow} inset;
    border-radius: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.text2};
  }
`;

export default GlobalStyle;
