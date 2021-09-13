import StyledCard from './styles'
import Img from '../../assets/favicon.ico'

export function Card() {
  return (
    <StyledCard>
      <div className='card-header'>
        <div className='img'>
          <img src={Img} alt="" />
        </div>
        <h3>Lorem ipsum</h3>
      </div>
      
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repellat placeat veniam consequuntur atque!
      </p>
    </StyledCard>
  )
}