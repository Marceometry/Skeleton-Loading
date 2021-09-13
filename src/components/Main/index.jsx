import { Button } from '../Button'
import { SkeletonCard } from '../Card/skeleton'
import StyledMain from './styles'

export function Main() {
  return (
    <StyledMain>
      <div className='main-header'>
        <h2>Skeleton Loading Example in Cards</h2>

        {/* <Button>Refresh</Button> */}
      </div>
      
      <div className='grid'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </StyledMain>
  )
}