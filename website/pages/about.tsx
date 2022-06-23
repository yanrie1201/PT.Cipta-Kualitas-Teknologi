import { style } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeButton } from '../components/button'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import image1 from '../public/images/Logo/1x/Asset 7.png'
import styles from '../styles/about.module.css'
import { Container, Grid, Stack } from '@mui/material'

import Image from 'next/image'
import { NavbarText } from 'reactstrap'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>

      <Navbar setBackgroundColor="" setPosition="absolute" />
      <main className={styles.home}>
        <section className={styles.header}>
          <Container maxWidth="xl">
            <Grid md={12} className={styles.titletext} justifyContent="center">
              About Us
            </Grid>
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
      </main>
      <Footer />
    </>
  )
}

export default Home
