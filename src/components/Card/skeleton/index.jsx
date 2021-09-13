import StyledSkeleton from './styles'

export function SkeletonCard() {
  return (
    <StyledSkeleton className='skeleton-border'>
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