import { useEffect, useState } from 'react'
import { getData } from '../../api/fake-data'
import { Button } from '../Button'
import { Card } from '../Card'
import { SkeletonCard } from '../Card/skeleton'
import StyledMain from './styles'

export function Main() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isLoading) return

    setTimeout(() => {
      const data = getData(5)
      setData(data)
      setIsLoading(false)
    }, 3500)
  }, [isLoading])

  console.log('rendered')

  return (
    <StyledMain>
      <div className='main-header'>
        <h2>Skeleton Loading Example in Cards</h2>

        <Button onClick={() => setIsLoading(true)}>Refresh</Button>
      </div>
      
      <div className='grid'>
        {isLoading ? (
          <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          </>
        ) : (
          data.map(item => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))
        )}
      </div>
    </StyledMain>
  )
}