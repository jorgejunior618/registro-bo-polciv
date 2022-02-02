import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.defaultFont};
    transition-duration: .4s;
    box-sizing: border-box;
    list-style: none;
  }
  a, h1, h2, h3, p, strong, span {
    text-decoration: none;
    color: ${({ theme }) => theme.defaultFont};
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
