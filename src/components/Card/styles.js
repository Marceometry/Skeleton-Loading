import styled from 'styled-components'

const StyledCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--background);
  border: 1px solid var(--border);

  .card-header {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    .img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 999px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  p {
    text-align: justify;
  }
`

export default StyledCard