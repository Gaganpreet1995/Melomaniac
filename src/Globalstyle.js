import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }

  h1 {
    font-family: 'Rubik', sans-serif;
  }
  
  h2, h3 {
    font-family: 'Rubik', sans-serif;
  }

  a {
    text-decoration: none;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

`;

export default GlobalStyle;
