import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  ul,
  li {
    list-style: none;
  }
  
  html,
  body {
    font-family: sans-serif;
    font-size: 16px;
  }
  
  /* Colors *****************************************/
  :root {
    --primary-color: #ec4a0a;
    --lighten-color: #f6a88a;
    --grey-100: #ffffff;
    --grey-200: #d0d5dd;
    --grey-300: #667085;
    --grey-400: #344054;
    --grey-500: #000000;
  }

  h1,
  h2 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }

  h3{
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  label, 
  span,
  button {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
`;

export default Globalstyle;