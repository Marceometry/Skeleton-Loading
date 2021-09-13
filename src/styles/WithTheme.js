import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'

const themes = {
  light: {
    color: '#333333',
    background: '#FAFAFA',
    border: '#CCCCCC',
  },
  dark: {
    color: '#FAFAFA',
    background: '#333333',
    border: '#CCCCCC',
  }
}

const ThemedColors = createGlobalStyle`
  :root {
    --color: ${({ theme }) => theme.color};
    --background: ${({ theme }) => theme.background};
    --border: ${({ theme }) => theme.border};
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