import { styled, Typography } from '@mui/material'

export const NavbarPage = styled(Typography)<{
  color?: string
  textalign?: string
  fsize?: string
  paddingRight?: string
}>`
  font-family: Poppins;
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
}>`
  font-family: Poppins;
  font-size: ${(props) => props.fsize || '22px'};
  font-weight: 500;
  color: ${(props) => props.color || 'black'};
  text-align: ${(props) => props.textalign || 'left'};
`

export const AccountName = styled(Typography)<{
  color?: string
}>`
  font-family: Quicksand;
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.color || 'black'};
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    display: none;
  }
`
