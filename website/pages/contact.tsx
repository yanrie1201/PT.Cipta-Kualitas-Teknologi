import { style } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeButton } from '../components/button'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import image1 from '../public/images/Logo/SVG/Logo A.svg'
import styles from '../styles/contact.module.css'
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import imageSolution_1 from '../public/images/Assets/SVG/Solution_IT.svg'
import imageSolution_2 from '../public/images/Assets/SVG/Solution_NET.svg'
import imageSolution_3 from '../public/images/Assets/SVG/Solution_IoT.svg'

import Image from 'next/image'
import { NavbarText } from 'reactstrap'
import { Padding } from '@mui/icons-material'
import { FooterText } from '../components/typography'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--theme)',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'var(--theme)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--theme)',
    },
  },
})

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
    <main className={styles.contact}>
      <section className={styles.header}>
        <Container maxWidth="xl">
          <Grid container justifyContent="left" alignItems="center">
            <Grid md={7}>
              <Paper sx={{ padding: '10px 10px' }}>
                <FooterText color="#000" fsize="30px" textalign="center">
                  Contact Us
                </FooterText>
                <FooterText color="#000" fsize="15px">
                  *You can contact us using form that we already provided
                </FooterText>
                <Stack direction="column" spacing={2}>
                  <CssTextField type="text" label="Full Name" />
                  <CssTextField type="text" label="Email" />
                  <CssTextField type="text" label="Phone Number" />
                  <CssTextField type="text" label="Subject" />
                  <CssTextField multiline type="text" label="Description" />
                </Stack>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ padding: '10px 0px' }}
                >
                  <HomeButton
                    width="fit-content"
                    padding="5px 50px"
                    fsize="20px"
                  >
                    Submit
                  </HomeButton>
                </Box>
              </Paper>
            </Grid>
            <Grid md={5}></Grid>
          </Grid>
        </Container>
      </section>
    </main>
    <Footer />
  </>
)

export default About
