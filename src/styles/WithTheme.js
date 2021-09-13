import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import SkeletonStyles from './SkeletonStyles'

const themes = {
  light: {
    color: '#333333',
    bodyBackground: '#EEEEEE',
    background: '#FAFAFA',
    border: '#CCCCCC',
    skeletonColor1: '#CCCCCC',
    skeletonColor2: '#DDDDDD',
  },
  dark: {
    color: '#FAFAFA',
    bodyBackground: '#333333',
    background: '#252525',
    border: '#CCCCCC',
    skeletonColor1: '#3E3E3E',
    skeletonColor2: '#555555',
  }
}

const ThemedColors = createGlobalStyle`
  :root {
    --color: ${({ theme }) => theme.color};
    --body-background: ${({ theme }) => theme.bodyBackground};
    --background: ${({ theme }) => theme.background};
    --border: ${({ theme }) => theme.border};
    --skeleton-color-1:  ${({ theme }) => theme.skeletonColor1};
    --skeleton-color-2:  ${({ theme }) => theme.skeletonColor2};
  }
`

export function WithTheme({ theme, children }) {
  return (
    <ThemeProvider theme={themes[theme]} >
      <ThemedColors />
      <GlobalStyles />
      <SkeletonStyles />

      { children }
    </ThemeProvider>
  )
}