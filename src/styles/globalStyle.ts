import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    &::-webkit-scrollbar {

    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, --apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
    font-size: 62.5%;

  }

  html, body, #__next {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    color: inherit;
    border-width: 0;
    padding: 0;
    cursor: pointer;
  }

 
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
  }

`;

export default GlobalStyle;
