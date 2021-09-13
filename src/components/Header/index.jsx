import StyledHeader from './styles'

export function Header({ children }) {
  return (
    <StyledHeader>
      <h1>Skeleton Loading</h1>

      { children }
    </StyledHeader>
  )
}
