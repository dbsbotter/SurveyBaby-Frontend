import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    overflow: auto;
  }

  body {
    background-image: linear-gradient(#e0ffff, #ffe0ea);
    color: #312e38;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 600px) {
      main {
        padding: 0 30px;
      }
    }
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h4, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer
  }
`;
