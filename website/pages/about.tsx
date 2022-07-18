import { style } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeButton } from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import image1 from "../public/images/Logo/SVG/Logo A.svg";
import styles from "../styles/about.module.css";
import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import imageSolution_1 from "../public/images/Assets/SVG/Solution_IT.svg";
import imageSolution_2 from "../public/images/Assets/SVG/Solution_NET.svg";
import imageSolution_3 from "../public/images/Assets/SVG/Solution_IoT.svg";
import imageClient_1 from "../public/images/Assets/1x/Logo_PouChen.png";
import imageClient_2 from "../public/images/Assets/1x/Logo_UPH.png";
import imageClient_3 from "../public/images/Assets/1x/Logo_NikomasGemilang.png";
import imageClient_4 from "../public/images/Assets/1x/Logo_GSI.png";
import imageClient_5 from "../public/images/Assets/1x/Logo_IndoKordsa.png";

import Image from "next/image";
import { NavbarText } from "reactstrap";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  slidesToShow: 3,
  focusOnSelect: true,
  swipeToSlide: true,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: "75px",
};
const About: NextPage = () => (
  <>
    <Head>
      <title>About - PT. Cipta Kualitas Teknologi</title>
      <meta name="description" content="PT. Cipta Kualitas Teknologi" />
    </Head>

    <Navbar
      setBackgroundColor="var(--white)"
      setPosition="absolute"
      setLogoFilter="none"
      setTextColor="var(--black)"
      setShadow="0 0 15px 0px rgba(0, 0, 0, 0.5)"
    />
    <main className={styles.about}>
      <section className={styles.header}>
        <Container maxWidth="xl">
          <Grid container justifyContent="left" alignItems="center">
            <Grid md={4}>
              <Image src={image1} className={styles.image} />
            </Grid>
            <Grid md={8} className={styles.abouttext}>
              <Stack direction="column" spacing={5}>
                <NavbarText className={styles.abouttext1}>
                  Who Are <span className={styles.textTheme}>We ?</span>
                </NavbarText>
                <NavbarText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime animi, soluta, velit ex voluptatum ratione nihil labore
                  consectetur impedit nam provident recusandae veritatis natus
                  hic, voluptate sunt. Ratione dignissimos in iusto quia
                  voluptate maiores amet at? Nisi alias iusto corrupti minima,
                  saepe dicta recusandae deserunt sed ad voluptates aspernatur
                  impedit?
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
      <section className={styles.thirdcontent}>
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.solutionContainer}
          >
            <Stack direction="column" spacing={8}>
              <Paper sx={{ boxShadow: 5 }} id="infrastructure">
                <Stack className={styles.solutionContent}>
                  <Grid md={12} className={styles.solutionImage}>
                    <Image src={imageSolution_1} width="150vw" height="150vh" />
                  </Grid>
                  <Grid md={12} className={styles.solutionName}>
                    IT Infrastructure
                  </Grid>
                  <Grid md={12} className={styles.solutionName1}>
                    IT infrastructure is the backbone for all organizations. A
                    good infrastructure will improve workforce efficiency in
                    achieving business goals. Planning, implementing, and
                    managin infrastructure requires expertise and experience
                    from all products or solutions such as computing solutions,
                    storage solutions, hybrid computing solutions, personal
                    storage cloud solutions, and edge computing solutions.
                  </Grid>
                </Stack>
              </Paper>

              <Paper sx={{ boxShadow: 5 }} id="network-security">
                <Stack className={styles.solutionContent}>
                  <Grid md={12} className={styles.solutionImage1}>
                    <Image src={imageSolution_2} width="150vw" height="150vh" />
                  </Grid>
                  <Grid md={12} className={styles.solutionName}>
                    Network & Security
                  </Grid>
                  <Grid md={12} className={styles.solutionName1}>
                    Viruses, spyware, worms, malware and service attacks are
                    constat threats to acompany network, data, time, and
                    productivity. Network and security protects application
                    infrastructure in real time, against network and application
                    downtime, malware spread, information theft, web services
                    attacts, etc. More than ever before, network security must
                    become application aware in order to mitigate application
                    threats
                  </Grid>
                </Stack>
              </Paper>

              <Paper sx={{ boxShadow: 5 }} id="internet">
                <Stack className={styles.solutionContent}>
                  <Grid md={12} className={styles.solutionImage}>
                    <Image src={imageSolution_3} width="150vw" height="150vh" />
                  </Grid>
                  <Grid md={12} className={styles.solutionName}>
                    Internet of Things
                  </Grid>
                  <Grid md={12} className={styles.solutionName1}>
                    IoT draws on an interconnected and connected object system
                    so that it can collect and transfer data over wireless
                    networks without human intebention. Previously it might not
                    have occcurred to humans how things like laptops, copiers,
                    refrigerators, smart TVs or coffee pots could be connected
                    to the internet. IoT attracts all devices, even devices that
                    cannot connect to the internet. Almost everything with
                    todays on / off switch and making it a part of
                  </Grid>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Container>
      </section>
      <section className={styles.productSection}>
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.productContainer}
          >
            <Grid md={12} className={styles.productTitle}>
              Our <span className={styles.colorBlack}>Products</span>
            </Grid>
            <Grid md={12} className={styles.productCarousel}>
              <Slider {...settings}>
                <div className={styles.productContent}>
                  <div className={styles.product}>
                    <div className={styles.productImage}>
                      <Image src={imageClient_1} />
                    </div>
                    <div className={styles.productName}>
                      <Link href="https://www.pouchen.com/">
                        <a target="_blank">Pou Chen Group</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.productContent}>
                  <div className={styles.product}>
                    <div className={styles.productImage}>
                      <Image src={imageClient_2} />
                    </div>
                    <div className={styles.productName}>
                      <Link href="https://www.uph.edu/">
                        <a target="_blank">Universitas Pelita Harapan</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.productContent}>
                  <div className={styles.product}>
                    <div className={styles.productImage}>
                      <Image src={imageClient_3} />
                    </div>
                    <div className={styles.productName}>
                      <Link href="http://www.pci.co.id/">
                        <a target="_blank">Nikomas Gemilang</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.productContent}>
                  <div className={styles.product}>
                    <div className={styles.productImage}>
                      <Image src={imageClient_4} />
                    </div>
                    <div className={styles.productName}>
                      <Link href="">
                        <a>Glostar Indonesia</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.productContent}>
                  <div className={styles.product}>
                    <div className={styles.productImage}>
                      <Image src={imageClient_5} />
                    </div>
                    <div className={styles.productName}>
                      <Link href="http://www.indokordsa.com/">
                        <a target="_blank">Indo Kordsa</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
