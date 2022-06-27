import type { NextPage } from "next";
import Head from "next/head";
import { HomeButton } from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import imageSolution_1 from "../public/images/Assets/SVG/Solution_IT.svg";
import imageSolution_2 from "../public/images/Assets/SVG/Solution_NET.svg";
import imageSolution_3 from "../public/images/Assets/SVG/Solution_IoT.svg";
import styles from "../styles/home.module.css";
import { Container, Grid } from "@mui/material";

import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>

      <Navbar
        setBackgroundColor="transparent"
        setPosition="absolute"
        setLogoFilter="brightness(100)"
        setTextColor="var(--white)"
        setShadow="0"
      />
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
                Our <span className={styles.colorBlack}>Best Solution</span>
              </Grid>
              <Grid md={3} container className={styles.solutionContent}>
                <Grid md={12} className={styles.solutionImage}>
                  <Image src={imageSolution_1} />
                </Grid>
                <Grid md={12} className={styles.solutionName}>
                  IT Infrastructure
                </Grid>
              </Grid>
              <Grid md={3} container className={styles.solutionContent}>
                <Grid md={12} className={styles.solutionImage}>
                  <div className={styles.solutionImageException}>
                    <Image src={imageSolution_2} />
                  </div>
                </Grid>
                <Grid md={12} className={styles.solutionName}>
                  Network & Security
                </Grid>
              </Grid>
              <Grid md={3} container className={styles.solutionContent}>
                <Grid md={12} className={styles.solutionImage}>
                  <Image src={imageSolution_3} />
                </Grid>
                <Grid md={12} className={styles.solutionName}>
                  Internet of Things
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={styles.categorySection}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.categoryContainer}
            >
              <Grid md={12} className={styles.categoryTitle}>
                <span className={styles.colorBlack}>Our</span> Products
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <div className={styles.categoryBoxContainer}>
                  <div className={styles.categoryAspect}></div>
                  <div
                    className={[styles.categoryBox, styles.categoryHue0].join(
                      " "
                    )}
                  >
                    <div className={styles.categoryName}>Hardware</div>
                  </div>
                </div>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <div className={styles.categoryBoxContainer}>
                  <div className={styles.categoryAspect}></div>
                  <div
                    className={[styles.categoryBox, styles.categoryHue1].join(
                      " "
                    )}
                  >
                    <div className={styles.categoryName}>Backup & Security</div>
                  </div>
                </div>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <div className={styles.categoryBoxContainer}>
                  <div className={styles.categoryAspect}></div>
                  <div
                    className={[styles.categoryBox, styles.categoryHue2].join(
                      " "
                    )}
                  >
                    <div className={styles.categoryName}>Virtualization</div>
                  </div>
                </div>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <div className={styles.categoryBoxContainer}>
                  <div className={styles.categoryAspect}></div>
                  <div
                    className={[styles.categoryBox, styles.categoryHue3].join(
                      " "
                    )}
                  >
                    <div className={styles.categoryName}>Replication & BCS</div>
                  </div>
                </div>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <div className={styles.categoryBoxContainer}>
                  <div className={styles.categoryAspect}></div>
                  <div
                    className={[styles.categoryBox, styles.categoryHue4].join(
                      " "
                    )}
                  >
                    <div className={styles.categoryName}>Networking</div>
                  </div>
                </div>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <div className={styles.categoryBoxContainer}>
                  <div className={styles.categoryAspect}></div>
                  <div
                    className={[styles.categoryBox, styles.categoryHue5].join(
                      " "
                    )}
                  >
                    <div className={styles.categoryName}>Cloud Service</div>
                  </div>
                </div>
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
