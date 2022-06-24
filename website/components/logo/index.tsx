import styles from "../../styles/navbar.module.css";
import logo from "../../public/images/Logo/SVG/Logo A.svg";
import Image from "next/image";

interface LogoProps {
  width: string;
  height: string;
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <>
      <Image width={width} height={height} src={logo} alt="Logo" />
    </>
  );
};

export default Logo;
