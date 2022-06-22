/* eslint-disable react/jsx-no-duplicate-props */
import { NavbarPage, TitlePage } from "../typography";
import styles from "../../styles/navbar.module.css";
import { Avatar, Box, Stack } from "@mui/material";
import logo from "../../public/images/white_logo-removebg-preview.png";
import Image from "next/image";
import { style } from "@mui/system";

const Logo = () => {
  return (
    <>
      <div
        style={{
          width: "8rem",
          height: "130px",
          position: "relative",
        }}
      >
        <Image className={styles.logo} src={logo} alt="Logo" />
      </div>
      <div className={styles.title}>
        <TitlePage fsize="50px" fontWeight="700" color="white">
          CKT
        </TitlePage>
        <TitlePage color="white" fsize="15px" fontWeight="600">
          PT. Cipta Kualitas Teknologi
        </TitlePage>
      </div>
    </>
  );
};

export default Logo;
