import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
	h1 { font-size: 20px }
	h2 { font-size: 18px }
	h3 { font-size: 16px }
`;
