/* eslint-disable react/jsx-no-duplicate-props */
import { FooterText } from "../typography";
import styles from "../../styles/footer.module.css";
import { Box, Container, Grid, Stack } from "@mui/material";
import Logo from "../logo/index";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.navbarBackgroundTop}>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            className={styles.socials}
            md={12}
          >
            <Grid container md={4} className={styles.socialTitle}>
              <FooterText mbottom="0">
                Connect with us in our social media
              </FooterText>
            </Grid>
            <Grid container md={8} className={styles.socialIcon}>
              <LinkedInIcon
                sx={{ color: "var(--white)", marginLeft: "auto" }}
                fontSize="large"
              />
              <InstagramIcon sx={{ color: "var(--white)" }} fontSize="large" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.navbarBackgroundMid}>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            className={styles.information}
            md={12}
          >
            <Grid item md="auto" className={styles.section}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Logo width="200vw" height="100vh" />
              </Box>
            </Grid>
            <Grid item md="auto" className={styles.section}>
              <Stack direction="column">
                <FooterText fsize="18px" mbottom="12px" fontWeight="700">
                  PT Cipta Kualitas Teknologi
                </FooterText>
                <FooterText mbottom="0px">
                  IT Infrastructure Solution
                </FooterText>
                <FooterText mbottom="0px">Internet of Things (IOT)</FooterText>
                <FooterText mbottom="0px">Network and Security</FooterText>
              </Stack>
            </Grid>
            <Grid item md="auto" className={styles.section}>
              <Stack direction="column">
                <FooterText fsize="18px" mbottom="12px" fontWeight="700">
                  Product
                </FooterText>
                <FooterText mbottom="0px">Hardware</FooterText>
                <FooterText mbottom="0px">Backup & Security</FooterText>
                <FooterText mbottom="0px">Replication & BCS</FooterText>
                <FooterText mbottom="0px">
                  Virtualization & Networking
                </FooterText>
                <FooterText mbottom="0px">Cloud & Service</FooterText>
              </Stack>
            </Grid>
            <Grid item md="auto" className={styles.section}>
              <Stack direction="column">
                <FooterText fsize="18px" mbottom="12px" fontWeight="700">
                  Contact Us
                </FooterText>
                <Stack direction="row" spacing={1}>
                  <PhoneIcon sx={{ color: "var(--white)" }} fontSize="medium" />
                  <FooterText>+62 21 5289 7480</FooterText>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <FaxIcon sx={{ color: "var(--white)" }} fontSize="medium" />
                  <FooterText>+62 21 5289 7399</FooterText>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <EmailIcon sx={{ color: "var(--white)" }} fontSize="medium" />
                  <FooterText>Christian.kangean@Ciptakualitas.co.id</FooterText>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.navbarBackgroundBot}>
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent="center"
            md={12}
            className={styles.copyright}
          >
            <FooterText mbottom="0px">
              © 2022 Copyright PT. Cipta Kualitas Teknologi
            </FooterText>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
