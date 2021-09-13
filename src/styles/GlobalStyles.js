import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font: 400 1rem sans-serif;
    background: var(--body-background);
    color: var(--color);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.25rem;
  }
`

export default GlobalStyles