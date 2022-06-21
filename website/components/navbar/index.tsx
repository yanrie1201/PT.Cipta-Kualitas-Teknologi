/* eslint-disable react/jsx-no-duplicate-props */
import { NavbarPage, TitlePage } from '../typography'
import styles from '../../styles/navbar.module.css'
import { Avatar, Box, Stack } from '@mui/material'
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
      <Logo />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: '40px',
          width: '75%',
        }}
      >
        <Stack direction="row" spacing={3}>
          <div className={styles.navbarcontent}>
            <NavbarPage color="white">Home</NavbarPage>
          </div>
          <div className={styles.navbarcontent}>
            <NavbarPage color="white">Product</NavbarPage>
          </div>
          <div className={styles.navbarcontent}>
            <NavbarPage color="white">About</NavbarPage>
          </div>
          <div className={styles.navbarcontent}>
            <NavbarPage color="white">Contact</NavbarPage>
          </div>
        </Stack>
      </Box>
    </div>
  )
}

export default Navbar
