import styled, { ThemeProps } from 'styled-components'
import { Theme } from '../styles/theme'

export const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: ${({ theme }: ThemeProps<Theme>): string => theme.maxWidth + 'px'};
  min-width: ${({ theme }: ThemeProps<Theme>): string => theme.minWidth + 'px'};
`
