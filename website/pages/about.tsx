import { style } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeButton } from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import image1 from "../public/images/Logo/SVG/Logo A.svg";
import styles from "../styles/about.module.css";
import { Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";
import { NavbarText } from "reactstrap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>

      <Navbar setBackgroundColor="" setPosition="absolute" />
      <main className={styles.home}>
        <section className={styles.header}>
          <Container maxWidth="xl">
            <Grid container justifyContent="left" alignItems="center">
              <Grid md={4}>
                <Image src={image1} className={styles.image} />
              </Grid>
              <Grid md={8} className={styles.abouttext}>
                <Stack direction="column" spacing={5}>
                  <NavbarText className={styles.abouttext1}>
                    Who Are We ?
                  </NavbarText>
                  <NavbarText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime animi, soluta, velit ex voluptatum ratione nihil
                    labore consectetur impedit nam provident recusandae
                    veritatis natus hic, voluptate sunt. Ratione dignissimos in
                    iusto quia voluptate maiores amet at? Nisi alias iusto
                    corrupti minima, saepe dicta recusandae deserunt sed ad
                    voluptates aspernatur impedit?
                  </NavbarText>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={styles.secondcontent}>
          <Container maxWidth={false} className={styles.maincontent}>
            <div className={styles.maincontent0}>
              <div className={styles.maincontent1}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  paddingBottom="5px"
                >
                  <NavbarText className={styles.textcontent1}>Value</NavbarText>
                  <NavbarText className={styles.textcontent}>
                    PT. Cipta Kualitias Teknologi
                  </NavbarText>
                </Stack>
                <NavbarText className={styles.textcontent2}>
                  Our Best Solution
                </NavbarText>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
