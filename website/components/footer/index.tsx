/* eslint-disable react/jsx-no-duplicate-props */
import { FooterText } from "../typography";
import styles from "../../styles/footer.module.css";
import logo from "../../public/images/white_logo-removebg-preview.png";
import Image from "next/image";
import { Button } from "reactstrap";
import { style } from "@mui/system";
import { Grid, Stack } from "@mui/material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* {arrow?:(
      <Icon></Icon>
    ):("")} */}
      <Grid container spacing={2} className={styles.footerContent}>
        <Grid item md={4}>
          <Image
            className={styles.logo}
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          ></Image>
        </Grid>
        <Grid container md={8}>
          <Grid item md={3}>
            <Stack direction="column">
              <FooterText
                fsize="18px"
                fontWeight="700"
                color="#fff"
                mbottom="12px"
              >
                PT
              </FooterText>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
