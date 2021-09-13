import { Card } from '../Card'
import StyledMain from './styles'

export function Main() {
  return (
    <StyledMain>
      <div className='header'>
        <h1>Lorem</h1>
        <button>Refresh</button>
      </div>
      
      <div className='grid'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledMain>
  )
}