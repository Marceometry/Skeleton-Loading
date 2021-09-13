import StyledSkeleton from './styles'

export function SkeletonCard() {
  return (
    <StyledSkeleton>
      <div className='card-header'>
        <div className='skeleton img' />
        <div className='skeleton title' />
      </div>
      
      <div className='content'>
        <div className='skeleton text' />
        <div className='skeleton text' />
        <div className='skeleton text' />
      </div>
    </StyledSkeleton>
  )
}