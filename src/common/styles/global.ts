import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

type GlobalStylesProps = {
  theme: Theme
}

const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
  * {
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
