import type { NextPage } from "next";
import Head from "next/head";
import { HomeButton } from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import imageSolution_1 from "../public/images/Assets/SVG/Solution_IT.svg";
import imageSolution_2 from "../public/images/Assets/SVG/Solution_NET.svg";
import imageSolution_3 from "../public/images/Assets/SVG/Solution_IoT.svg";
import imageProduct_1 from "../public/images/Assets/1x/Logo_HP.png";
import imageProduct_2 from "../public/images/Assets/1x/Logo_H3C.png";
import imageProduct_3 from "../public/images/Assets/1x/Logo_Dell.png";
import imageProduct_4 from "../public/images/Assets/1x/Logo_Comvault.png";
import imageProduct_5 from "../public/images/Assets/1x/Logo_HyperV.png";
import imageProduct_6 from "../public/images/Assets/1x/Logo_lenovo.png";
import imageProduct_7 from "../public/images/Assets/1x/Logo_Office.png";
import imageProduct_8 from "../public/images/Assets/1x/Logo_Sangfor.png";
import imageProduct_9 from "../public/images/Assets/1x/Logo_TrendM.png";
import imageProduct_10 from "../public/images/Assets/1x/Logo_VMWare.png";
import imageProduct_11 from "../public/images/Assets/1x/Logo_Veeam.png";
import imageProduct_12 from "../public/images/Assets/1x/Logo_Lacakio.png";
import styles from "../styles/home.module.css";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
                <Link href="contact">
                  <a>
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
                  </a>
                </Link>
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
                <span className={styles.colorBlack}>Our</span> Specialization
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <Link href="../product#hardware">
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
                </Link>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <Link href="../product#backup-security">
                  <div className={styles.categoryBoxContainer}>
                    <div className={styles.categoryAspect}></div>
                    <div
                      className={[styles.categoryBox, styles.categoryHue1].join(
                        " "
                      )}
                    >
                      <div className={styles.categoryName}>
                        Backup & Security
                      </div>
                    </div>
                  </div>
                </Link>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <Link href="../product#virtualization">
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
                </Link>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <Link href="../product#replication-bcs">
                  <div className={styles.categoryBoxContainer}>
                    <div className={styles.categoryAspect}></div>
                    <div
                      className={[styles.categoryBox, styles.categoryHue3].join(
                        " "
                      )}
                    >
                      <div className={styles.categoryName}>
                        Replication & BCS
                      </div>
                    </div>
                  </div>
                </Link>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <Link href="../product#networking">
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
                </Link>
              </Grid>
              <Grid md={4} className={styles.categoryContent}>
                <Link href="../product#cloud-service">
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
                </Link>
              </Grid>
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
                        <Image src={imageProduct_1} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.hpe.com/">
                          <a target="_blank">Hewlett Packard</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_2} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.h3c.com/">
                          <a target="_blank">H3C</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_3} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.dell.com/">
                          <a target="_blank">DELL</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_4} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.commvault.com/">
                          <a target="_blank">Commvault</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_5} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-technology-overview">
                          <a target="_blank">Microsoft Hyper-V</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_6} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.lenovo.com/">
                          <a target="_blank">Lenovo</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_7} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.microsoft.com/microsoft-365">
                          <a target="_blank">Office 365</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_8} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.sangfor.com/">
                          <a target="_blank">Sangfor</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_9} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.trendmicro.com/">
                          <a target="_blank">Trend Micro</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_10} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.vmware.com/">
                          <a target="_blank">VMware</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_11} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://www.veeam.com/">
                          <a target="_blank">Veeam</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.product}>
                      <div className={styles.productImage}>
                        <Image src={imageProduct_12} />
                      </div>
                      <div className={styles.productName}>
                        <Link href="https://lacak.io/">
                          <a target="_blank">Lacak.io</a>
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
};

export default Home;
