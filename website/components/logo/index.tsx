/* eslint-disable react/jsx-no-duplicate-props */
import { NavbarPage, TitlePage } from '../typography'
import styles from '../../styles/navbar.module.css'
import { Avatar, Box, Stack } from '@mui/material'
import logo from '../../public/images/Logo/0.5x/Asset 7.png'
import Image from 'next/image'
import { style } from '@mui/system'

interface LogoProps {
  width: string
  height: string
}

const Logo = ({ width, height }: LogoProps) => {
  return (
    <>
      <Image
        width={width}
        height={height}
        className={styles.logo}
        src={logo}
        alt="Logo"
      />
    </>
  )
}

export default Logo
