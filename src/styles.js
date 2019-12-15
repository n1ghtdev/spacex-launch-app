import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
  h1,h2,h3,h4,h5,h6,p,ul,li,body {
    margin: 0;
  }
`;

export default GlobalStyles;
