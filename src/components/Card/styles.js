import styled from 'styled-components'

const StyledCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background: #202020;

  div {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 8px;
      background: #151515;
    }
  }
`

export default StyledCard