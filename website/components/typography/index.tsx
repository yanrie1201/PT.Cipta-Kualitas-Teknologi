import { styled, Typography } from '@mui/material'

export const NavbarPage = styled(Typography)<{
  color?: string
  textalign?: string
  fsize?: string
  paddingRight?: string
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || '22px'};
  font-weight: 500;
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.textalign || 'left'};
  padding-right: ${(props) => props.paddingRight || '10px'};
`

export const TitlePage = styled(Typography)<{
  color?: string
  textalign?: string
  fsize?: string
  fontWeight?: string
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || '22px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.textalign || 'left'};
`

export const TextContent = styled(Typography)<{
  color?: string
  textalign?: string
  fsize?: string
  fontWeight?: string
}>`
  font-family: Quicksand, sans-serif;
  font-size: ${(props) => props.fsize || '22px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.textalign || 'left'};
`
