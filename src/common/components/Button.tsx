import styled from 'styled-components'

export const Button = styled.span`
  cursor: pointer;
  padding: 5px;
  font-size: 20px;
  transition: filter 0.2s linear;

  :hover {
    filter: opacity(0.75);
  }
`
