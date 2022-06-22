import { style } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import { HomeButton } from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/home.module.css";

const pageTitle = "Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{pageTitle} - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>

      <Navbar setBackgroundColor="transparent" setPosition="absolute" />
      <div className={styles.home}>
        <div className={styles.header}>
          <div className={styles.overlay}>
            <div className={styles.transition}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>WE READY TO SERVE YOU</div>
                <div className={styles.subTitle}>
                  We provide you with our best solution in IT Infrastructure,
                  Security, and Internet of Things
                </div>

                <HomeButton
                  padding="20px 50px"
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
        </div>
        <div className={styles.solution}></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
