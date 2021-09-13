import styled from 'styled-components'

const StyledButton = styled.button`
  all: unset;
  padding: .5rem 1rem;
  color: var(--background);
  background: var(--color);
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(.8);
  }
`

export default StyledButton