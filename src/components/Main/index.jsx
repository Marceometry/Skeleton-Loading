import { SkeletonCard } from '../Card/skeleton'
import StyledMain from './styles'

export function Main() {
  return (
    <StyledMain>
      <div className='main-header'>
        <h1>Lorem</h1>
        <button>Refresh</button>
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