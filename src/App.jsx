import { WithTheme } from './styles/WithTheme'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { useState } from 'react'
import { Button } from './components/Button'

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('dark')

  function ToggleTheme(theme) {
    setCurrentTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <WithTheme theme={currentTheme}>
      <Header>
        <Button onClick={() => ToggleTheme(currentTheme)}>
          Toggle Theme
        </Button>
      </Header>

      <Main />
    </WithTheme>
  )
}