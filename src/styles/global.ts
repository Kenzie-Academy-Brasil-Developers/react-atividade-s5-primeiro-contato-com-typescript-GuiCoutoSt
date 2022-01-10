import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Poppins', sans-serif;
  }

 
`;
