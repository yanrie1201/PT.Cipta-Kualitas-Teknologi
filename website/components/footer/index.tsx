/* eslint-disable react/jsx-no-duplicate-props */
import { FooterText } from '../typography'
import styles from '../../styles/footer.module.css'
import logo from '../../public/images/white_logo-removebg-preview.png'
import Image from 'next/image'
import { Button } from 'reactstrap'
import { style } from '@mui/system'
import { Box, Grid, Stack } from '@mui/material'
import Logo from '../logo/index'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import FaxIcon from '@mui/icons-material/Fax'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contentfooter}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            paddingTop: '40px',
            paddingLeft: '100px',
            paddingRight: '100px',
          }}
        >
          <Logo />
        </Box>
        <Stack direction="row" spacing={3}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '40px',
              paddingRight: '80px',
            }}
          >
            <Stack direction="column" spacing={0}>
              <FooterText fsize="18px" fontWeight="700">
                PT Cipta Kualitas Teknologi
              </FooterText>
              <FooterText mbottom="0px">IT Infrastructure Solution</FooterText>
              <FooterText mbottom="0px">Internet of Things (IOT)</FooterText>
              <FooterText mbottom="0px">Network and Security</FooterText>
            </Stack>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '40px',
              paddingRight: '80px',
            }}
          >
            <Stack direction="column" spacing={0}>
              <FooterText fsize="18px" fontWeight="700">
                Product
              </FooterText>
              <FooterText mbottom="0px">Hardware</FooterText>
              <FooterText mbottom="0px">Backup & Security</FooterText>
              <FooterText mbottom="0px">Replication & BCS</FooterText>
              <FooterText mbottom="0px">Virtualization & Networking</FooterText>
              <FooterText mbottom="0px">Cloud & Service</FooterText>
            </Stack>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '40px',
              paddingRight: '80px',
            }}
          >
            <Stack direction="column" spacing={0.5}>
              <FooterText fsize="18px" fontWeight="700">
                Contact Us
              </FooterText>
              <Stack direction="row" spacing={1}>
                <Link href="https://www.linkedin.com/company/pt-cipta-kualitas-teknologi/?trk=ppro_cprof&originalSubdomain=id">
                  <LinkedInIcon sx={{ color: 'white' }} fontSize="large" />
                </Link>
                <FacebookIcon sx={{ color: 'white' }} fontSize="large" />
                <InstagramIcon sx={{ color: 'white' }} fontSize="large" />
              </Stack>
              <Stack direction="row" spacing={1}>
                <PhoneIcon sx={{ color: 'white' }} fontSize="medium" />
                <FooterText>+62 21 5289 7480</FooterText>
              </Stack>
              <Stack direction="row" spacing={1}>
                <FaxIcon sx={{ color: 'white' }} fontSize="medium" />
                <FooterText>+62 21 5289 7399</FooterText>
              </Stack>
              <Stack direction="row" spacing={1}>
                <EmailIcon sx={{ color: 'white' }} fontSize="medium" />
                <FooterText>Christian.kangean@Ciptakualitas.co.id</FooterText>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </div>
      <div className={styles.copyright}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '15px',
            paddingBottom: '15px',
          }}
        >
          <FooterText mbottom="0px" fsize="15px">
            © 2022 Copyright PT. Cipta Kualitas Teknologi
          </FooterText>
        </Box>
      </div>
    </div>
  )
}

export default Footer
