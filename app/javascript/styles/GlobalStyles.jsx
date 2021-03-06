import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow: -moz-scrollbars-vertical; 
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: ${props => props.theme.palette.secondary.main};
    }
    &::-webkit-scrollbar-track{
      background-color: ${props => props.theme.palette.primary.main};
    }
  }

  body {
    min-height: 100vh;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.palette.common.body};
  }

`;

export default GlobalStyles;