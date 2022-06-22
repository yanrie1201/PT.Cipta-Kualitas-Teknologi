import styled from 'styled-components'
import { Button } from '@mui/material'

export const HomeButton = styled(Button)<{
  width?: string
  color?: string
  fsize?: string
  background: string
  borderradius?: string
}>`
  width: ${(props) => props.width || '100%'};
  text-align: center;
  color: ${(props) => props.color || '#FFF'};
  font-size: ${(props) => props.fsize || '16px'};
  font-family: Georama, sans-serif;
  font-weight: 700;
  text-transform: none;
  background-color: ${(props) => props.background || '#ff3c3c'};
  border-radius: ${(props) => props.borderradius || '20px'};
  z-index: 1;
  opacity: 0.6;

  &:hover {
    cursor: default;
    opacity: 1;
  }
`
