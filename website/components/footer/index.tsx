/* eslint-disable react/jsx-no-duplicate-props */
import { FooterText } from '../typography'
import styles from '../../styles/footer.module.css'
import { Box, Container, Grid, Stack } from '@mui/material'
import Logo from '../logo/index'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import FaxIcon from '@mui/icons-material/Fax'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.navbarBackgroundTop}>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            className={styles.socials}
            md={12}
          >
            <Grid container md={4} className={styles.socialTitle}>
              <FooterText mbottom="0">
                Connect with us in our social media
              </FooterText>
            </Grid>
            <Grid
              container
              md={8}
              className={styles.socialIcon}
              justifyContent="right"
            >
              <Link href="https://www.linkedin.com/in/christian-kangean-258550225/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=id">
                <a>
                  <LinkedInIcon
                    sx={{ color: 'var(--white)', marginLeft: 'auto' }}
                    fontSize="large"
                  />
                </a>
              </Link>

              <Link href="https://www.instagram.com/ciptakualitas/">
                <a>
                  <InstagramIcon
                    sx={{ color: 'var(--white)' }}
                    fontSize="large"
                  />
                </a>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.navbarBackgroundMid}>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            className={styles.information}
            md={12}
          >
            <Grid item md="auto" className={styles.section}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
                className={styles.footerLogo}
              >
                <Logo width="200vw" height="100vh" />
              </Box>
            </Grid>
            <Grid item md="auto" className={styles.section}>
              <Stack direction="column">
                <FooterText fsize="18px" mbottom="12px" fontWeight="700">
                  <Link href="../about">
                    <a>PT Cipta Kualitas Teknologi</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../about#infrastructure">
                    <a>IT Infrastructure Solution</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../about#network-security">
                    <a>Network and Security</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../about#internet">
                    <a>Internet of Things (IOT)</a>
                  </Link>
                </FooterText>
              </Stack>
            </Grid>
            <Grid item md="auto" className={styles.section}>
              <Stack direction="column">
                <FooterText fsize="18px" mbottom="12px" fontWeight="700">
                  <Link href="../product">
                    <a>Product</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../product#hardware">
                    <a>Hardware</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../product#backup-security">
                    <a>Backup & Security</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../product#replication-bcs">
                    <a>Replication & BCS</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../product#virtualization">
                    <a>Virtualization</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../product#cloud-service">
                    <a>Cloud & Services</a>
                  </Link>
                </FooterText>
                <FooterText mbottom="0px">
                  <Link href="../product#networking">
                    <a>Networking</a>
                  </Link>
                </FooterText>
              </Stack>
            </Grid>
            <Grid item md="auto" className={styles.section}>
              <Stack direction="column">
                <FooterText fsize="18px" mbottom="12px" fontWeight="700">
                  <Link href="../contact">
                    <a>Contact Us</a>
                  </Link>
                </FooterText>
                <Stack direction="row" spacing={1}>
                  <PhoneIcon sx={{ color: 'var(--white)' }} fontSize="medium" />
                  <FooterText>+62 21 5289 7480</FooterText>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <FaxIcon sx={{ color: 'var(--white)' }} fontSize="medium" />
                  <FooterText>+62 21 5289 7399</FooterText>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <EmailIcon sx={{ color: 'var(--white)' }} fontSize="medium" />
                  <FooterText>sales@ciptakualitas.co.id</FooterText>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles.navbarBackgroundBot}>
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent="center"
            md={12}
            className={styles.copyright}
          >
            <FooterText mbottom="0px">
              © 2022 Copyright PT. Cipta Kualitas Teknologi
            </FooterText>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Footer
