import { PropaneSharp } from "@mui/icons-material";
import { styled, Typography } from "@mui/material";

export const NavbarPage = styled(Typography)<{
  color?: string;
  colorHover?: string;
  colorLine?: string;
  textalign?: string;
  fsize?: string;
  margin?: string;
  padding?: string;
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || "22px"};
  font-weight: 500;
  color: ${(props) => props.color || "var(--black)"};
  text-align: ${(props) => props.textalign || "left"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  &:after {
    background: ${(props) => props.colorLine || "var(--theme)"};
  }
  &:hover {
    color: ${(props) => props.colorHover || "var(--theme)"};
  }
`;

export const TitlePage = styled(Typography)<{
  color?: string;
  textalign?: string;
  fsize?: string;
  fontWeight?: string;
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || "22px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.textalign || "left"};
`;

export const FooterText = styled(Typography)<{
  color?: string;
  textalign?: string;
  fsize?: string;
  fontWeight?: string;
  mbottom?: string;
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || "16px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  color: ${(props) => props.color || "#fff"};
  text-align: ${(props) => props.textalign || "left"};
  margin-bottom: ${(props) => props.mbottom || "1rem"};
`;
