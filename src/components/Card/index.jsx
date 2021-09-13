import StyledCard from './styles'

export function Card({ image, title, description }) {
  return (
    <StyledCard>
      <div className='card-header'>
        <div className='img skeleton'>
          <img src={image} alt='Imagem' />
        </div>
        <h3>{title}</h3>
      </div>
      
      <p>{description}</p>
    </StyledCard>
  )
}