import styled from 'styled-components'

const StyledMain = styled.main`
  padding: 4rem 20vw;
  
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`

export default StyledMain