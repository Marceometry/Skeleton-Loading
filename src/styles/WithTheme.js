import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"
import GlobalStyles from './GlobalStyles'

const themes = {
  light: {
    color: '#333333',
    background: '#FAFAFA',
  },
  dark: {
    color: '#FAFAFA',
    background: '#333333',
  }
}

const ThemedColors = createGlobalStyle`
  :root {
    --color: ${({ theme }) => theme.color};
    --background: ${({ theme }) => theme.background};
  }
`

export function WithTheme({ theme, children }) {
  return (
    <ThemeProvider theme={themes[theme]} >
      <ThemedColors />
      <GlobalStyles />

      { children }
    </ThemeProvider>
  )
}