import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.palette.common.body};
  }

`;

export default GlobalStyles;