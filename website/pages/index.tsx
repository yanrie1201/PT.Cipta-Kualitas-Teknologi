import { style } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/footer.module.css";

const pageTitle = "Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{pageTitle} - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>
      <Navbar />
      <div className={styles.test}></div>
      <Footer />
    </>
  );
};

export default Home;
