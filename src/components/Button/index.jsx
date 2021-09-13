import StyledButton from './styles'

export function Button({ onClick, children }) {
  return (
    <StyledButton onClick={onClick}>
      { children }
    </StyledButton>
  )
}