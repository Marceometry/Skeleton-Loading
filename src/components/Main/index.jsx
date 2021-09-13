import { Button } from '../Button'
import { Card } from '../Card'
import StyledMain from './styles'

export function Main() {
  return (
    <StyledMain>
      <div className='main-header'>
        <h2>Skeleton Loading Example in Cards</h2>

        {/* <Button>Refresh</Button> */}
      </div>
      
      <div className='grid'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledMain>
  )
}