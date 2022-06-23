import { style } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeButton } from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import imageSolution_1 from "../public/images/Background/Server 1.jpeg";
import imageSolution_2 from "../public/images/Background/Server 2.jpeg";
import imageSolution_3 from "../public/images/Background/Server 1.jpeg";
import styles from "../styles/home.module.css";
import { Container, Grid } from "@mui/material";

import Image from "next/image";
const pageTitle = "Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{pageTitle} - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>

      <Navbar setBackgroundColor="transparent" setPosition="absolute" />
      <main className={styles.home}>
        <section className={styles.header}>
          <div className={styles.headerOverlay}>
            <div className={styles.headerTransition}>
              <div className={styles.headerTitleContainer}>
                <div className={styles.headerTitle}>WE READY TO SERVE YOU</div>
                <div className={styles.headerSubtitle}>
                  We provide you with our best solution in IT Infrastructure,
                  Security, and Internet of Things
                </div>

                <HomeButton
                  padding="15px 30px"
                  width="fit-content"
                  borderradius="100px"
                  margin="40px 0 0 0"
                  fsize="20px"
                  fweight="600"
                >
                  Contact Us
                </HomeButton>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.solutionSection}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.solutionContainer}
            >
              <Grid md={12} className={styles.solutionTitle}>
                Our Best Solution
              </Grid>
              <Grid md={3} container className={styles.solutionContent}>
                <Grid md={12} className={styles.solutionImage}>
                  <Image src={imageSolution_1} className={styles.image} />
                </Grid>
                <Grid md={12} className={styles.solutionName}>
                  IT Infrastructure
                </Grid>
              </Grid>
              <Grid md={3} container className={styles.solutionContent}>
                <Grid md={12} className={styles.solutionImage}>
                  <Image src={imageSolution_2} className={styles.image} />
                </Grid>
                <Grid md={12} className={styles.solutionName}>
                  Network & Security
                </Grid>
              </Grid>
              <Grid md={3} container className={styles.solutionContent}>
                <Grid md={12} className={styles.solutionImage}>
                  <Image src={imageSolution_3} className={styles.image} />
                </Grid>
                <Grid md={12} className={styles.solutionName}>
                  Internet of Things
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
