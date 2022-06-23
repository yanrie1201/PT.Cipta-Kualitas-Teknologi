/* eslint-disable react/jsx-no-duplicate-props */
import { NavbarPage } from "../typography";
import styles from "../../styles/navbar.module.css";
import { Box, Container, Grid, Stack } from "@mui/material";
import Link from "next/link";
import Logo from "../logo";
interface NavbarProps {
  setBackgroundColor: string;
  setPosition: string;
}
const Navbar = ({ setBackgroundColor, setPosition }: NavbarProps) => {
  return (
    <Container
      maxWidth={false}
      style={{ backgroundColor: setBackgroundColor }}
      sx={{ position: setPosition }}
      className={styles.navbar}
    >
      {/* <Logo /> */}
      <Container maxWidth="xl" className={styles.navbarcontent}>
        <Grid container md={12}>
          <Grid md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Link href="/">
                <a>
                  <Logo width="160vw" height="80vh" />
                </a>
              </Link>
            </Box>
          </Grid>
          <Grid container md={9} className={styles.navbarItems}>
            <Stack
              direction="row"
              spacing={6}
              width="100%"
              justifyContent="flex-end"
            >
              <NavbarPage color="white" className={styles.navbarText}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </NavbarPage>
              <NavbarPage color="white" className={styles.navbarText}>
                Products
              </NavbarPage>
              <NavbarPage color="white" className={styles.navbarText}>
                <Link href="../about">
                  <a>About</a>
                </Link>
              </NavbarPage>
              <NavbarPage color="white" className={styles.navbarText}>
                Contact
              </NavbarPage>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Navbar;
