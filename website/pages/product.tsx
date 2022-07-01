import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
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
import styles from "../styles/product.module.css";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
const Product: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>

      <Navbar
        setBackgroundColor="var(--white)"
        setPosition="relative"
        setLogoFilter="none"
        setTextColor="var(--black)"
        setShadow="0 0 15px 0px rgba(0, 0, 0, 0.5)"
      />
      <main className={styles.product}>
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
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#hardware">
                  <a>Hardware</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#backup-security">
                  <a>Backup & Security</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#virtualization">
                  <a>Replication & BCS</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#virtualization">
                  <a>Virtualization</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#cloud-service">
                  <a>Cloud Service</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#networking">
                  <a>Networking</a>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className={styles.productSection}>
          <div className={styles.productRow}>
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={styles.productContainer}
                id="hardware"
              >
                <Grid md={12} className={styles.productTitle}>
                  <span>Hardware</span>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.hpe.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_1} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.sangfor.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_8} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.dell.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_3} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.lenovo.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_6} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={styles.productRow}>
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={styles.productContainer}
                id="backup-security"
              >
                <Grid md={12} className={styles.productTitle}>
                  <span>Backup & Security</span>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.trendmicro.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_9} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.sangfor.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_8} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.commvault.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_4} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="3https://www.veeam.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_11} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={styles.productRow}>
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={styles.productContainer}
                id="replication-bcs"
              >
                <Grid md={12} className={styles.productTitle}>
                  <span>Replication & BCS</span>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.veeam.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_11} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={styles.productRow}>
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={styles.productContainer}
                id="virtualization"
              >
                <Grid md={12} className={styles.productTitle}>
                  <span>Virtualization</span>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-technology-overview">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_5} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.vmware.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_10} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={styles.productRow}>
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={styles.productContainer}
                id="cloud-service"
              >
                <Grid md={12} className={styles.productTitle}>
                  <span>Cloud Services</span>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.microsoft.com/microsoft-365/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_7} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={styles.productRow}>
            <Container maxWidth="xl">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={styles.productContainer}
                id="networking"
              >
                <Grid md={12} className={styles.productTitle}>
                  <span>Networking</span>
                </Grid>
                <Grid md={3} className={styles.productContent}>
                  <div className={styles.productItem}>
                    <Link href="https://www.h3c.com/">
                      <a target="_blank">
                        <div className={styles.productImage}>
                          <Image src={imageProduct_2} />
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
