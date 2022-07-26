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
      setPosition="relative"
      setLogoFilter="none"
      setTextColor="var(--black)"
      setShadow="0 0 15px 0px rgba(0, 0, 0, 0.5)"
    />
    <main className={styles.contact}>
      <section className={styles.header}>
        <div className={styles.backgroundheader}>
          <Container maxWidth="xl">
            <Grid container alignItems="center" className={styles.form}>
              <Grid
                md={7}
                sx={{ backgroundColor: '#ffff' }}
                className={styles.form1}
              >
                <FooterText
                  color="#000"
                  fsize="30px"
                  textalign="center"
                  fontWeight="500"
                >
                  Contact Us
                </FooterText>
                <FooterText color="#000" fsize="15px">
                  *You can contact us using form that we already provided
                </FooterText>
                <Stack direction="column" spacing={3}>
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
              </Grid>
              <Grid md={5} className={styles.contentright}>
                <Stack direction="column" sx={{ paddingBottom: '20px' }}>
                  <FooterText
                    fontWeight="600"
                    fsize="25px"
                    mbottom="2px"
                    sx={{ textDecoration: 'underline' }}
                  >
                    Contact Information
                  </FooterText>
                  <FooterText fsize="15px" mbottom="0px">
                    PT. Cipta Kualitas Teknologi
                  </FooterText>
                  <FooterText fsize="15px" mbottom="0px">
                    Mayapada Tower, 11th Floor
                  </FooterText>
                  <FooterText fsize="15px" mbottom="0px">
                    Jl. Jend. Sudirman, Kav. 28,
                  </FooterText>
                  <FooterText fsize="15px" mbottom="0px">
                    Jakarta 12920 - INDONESIA
                  </FooterText>
                  <FooterText fsize="15px" mbottom="0px">
                    Phone: +62 62 5289 7480
                  </FooterText>
                  <FooterText fsize="15px" mbottom="0px">
                    Facsimile: +62 21 5289 7399
                  </FooterText>
                  <FooterText fsize="15px" mbottom="0px">
                    Email: sales@ciptakualitas.co.id
                  </FooterText>
                </Stack>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2836146676937!2d106.65807671535181!3d-6.226287462712871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb9f858ae757%3A0x53dfe445d4dfb6d!2sPT.%20Cipta%20Kualitas%20Teknologi!5e0!3m2!1sen!2sid!4v1656393314465!5m2!1sen!2sid"
                  width="500"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default About
