import { createGlobalStyle } from 'styled-components'

import NotoSans from '../fonts/NotoSans-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSans}) format('trueType');
  }

  * {
    padding: 0;
    margin: 0;
    font-family: 'NotoSans';
    font-size: 13px;
    transition-duration: .3s;
    box-sizing: border-box;
    list-style: none;
  }
  a, h1, h2, h3, p, strong, span {
    text-decoration: none;
    color: currentColor;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  body {
    background-color: ${({ theme }) => theme.background};
  }
  input:focus, textarea:focus, select:focus, button, button:focus{
    outline: none;
  }

  button {
    background: none;
    border: none;
  }
`

export default GlobalStyle;
