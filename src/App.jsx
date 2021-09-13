import { WithTheme } from './styles/WithTheme'
import { Header } from './components/Header'
import { Main } from './components/Main'

export default function App() {
  return (
    <WithTheme theme={'dark'}>
      <Header />
      <Main />
    </WithTheme>
  )
}