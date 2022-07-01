/* eslint-disable react/jsx-no-duplicate-props */
import { NavbarPage } from "../typography";
import styles from "../../styles/navbar.module.css";
import { Box, Container, Grid, Stack } from "@mui/material";
import Link from "next/link";
import Logo from "../logo";
interface NavbarProps {
  setBackgroundColor: string;
  setPosition: string;
  setLogoFilter: string;
  setTextColor: string;
  setShadow: string;
}
const Navbar = ({
  setBackgroundColor,
  setPosition,
  setLogoFilter,
  setTextColor = "var(--black)",
  setShadow = "0",
}: NavbarProps) => {
  return (
    <Container
      maxWidth={false}
      style={{ backgroundColor: setBackgroundColor }}
      sx={{ position: setPosition, boxShadow: setShadow }}
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
                  <div className="logo" style={{ filter: setLogoFilter }}>
                    <Logo width="160vw" height="80vh" />
                  </div>
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
              <NavbarPage color={setTextColor} className={styles.navbarText}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </NavbarPage>
              <NavbarPage color={setTextColor} className={styles.navbarText}>
                <Link href="../product">
                  <a>Products</a>
                </Link>
              </NavbarPage>
              <NavbarPage color={setTextColor} className={styles.navbarText}>
                <Link href="../about">
                  <a>About</a>
                </Link>
              </NavbarPage>
              <NavbarPage color={setTextColor} className={styles.navbarText}>
                <Link href="../contact">
                  <a>Contact</a>
                </Link>
              </NavbarPage>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Navbar;
