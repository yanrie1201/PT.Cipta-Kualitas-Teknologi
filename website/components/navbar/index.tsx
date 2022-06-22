/* eslint-disable react/jsx-no-duplicate-props */
import { NavbarPage, TitlePage } from '../typography'
import styles from '../../styles/navbar.module.css'
import { Avatar, Box, Container, Grid, Stack } from '@mui/material'
import logo from '../../public/images/white_logo-removebg-preview.png'
import Image from 'next/image'
import { style } from '@mui/system'
import Logo from '../logo/index'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* {arrow?:(
      <Icon></Icon>
    ):("")} */}
      {/* <Logo /> */}
      <Container maxWidth="xl" className={styles.navbarcontent}>
        <Grid container md={12}>
          <Grid md={3}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Logo width="160vw" height="80vh" />
            </Box>
          </Grid>
          <Grid container md={9} className={styles.navbarItems}>
            <Stack
              direction="row"
              spacing={6}
              width="100%"
              justifyContent="flex-end"
            >
              <NavbarPage color="white" className={styles.navbarText}>
                Home
              </NavbarPage>
              <NavbarPage color="white" className={styles.navbarText}>
                Products
              </NavbarPage>
              <NavbarPage color="white" className={styles.navbarText}>
                About
              </NavbarPage>
              <NavbarPage color="white" className={styles.navbarText}>
                Contact
              </NavbarPage>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Navbar
