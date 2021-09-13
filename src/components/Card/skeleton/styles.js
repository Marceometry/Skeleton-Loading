import styled from 'styled-components'
import StyledCard from '../styles'

const StyledSkeleton = styled(StyledCard)`
  .title {
    width: 60%;
    height: 20px;
    border-radius: 4px;
  }

  .text {
    width: 100%;
    height: 16px;
    border-radius: 4px;
    margin-bottom: 4px;

    &:last-child {
      width: 70%;
      margin-bottom: 0;
    }
  }
`

export default StyledSkeleton