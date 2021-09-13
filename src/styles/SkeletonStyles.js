import { createGlobalStyle } from 'styled-components'

const SkeletonStyles = createGlobalStyle`
  @keyframes skeleton-animation {
    0% { background: var(--skeleton-color-1) }
    100% { background: var(--skeleton-color-2) }
  }

  .skeleton {
    animation: skeleton-animation 1s linear infinite alternate;
  }
`

export default SkeletonStyles