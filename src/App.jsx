import { WithTheme } from "./styles/WithTheme"
import { Sidebar } from "./components/Sidebar"

export default function App() {
  return (
    <WithTheme theme={'dark'}>
      <Sidebar />
    </WithTheme>
  )
}