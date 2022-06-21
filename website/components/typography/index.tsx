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

export const FooterText = styled(Typography)<{
  color?: string
  textalign?: string
  fsize?: string
  fontWeight?: string
  mbottom?: string
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || '16px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  color: ${(props) => props.color || '#fff'};
  text-align: ${(props) => props.textalign || 'left'};
  margin-bottom: ${(props) => props.mbottom || '1rem'};
`
