import { AccountName, NavbarPage, TitlePage } from '../typography'
import styles from '../../styles/navbar.module.css'
import { Avatar } from '@mui/material'
import logo from '../../public/images/white_logo-removebg-preview.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* {arrow?:(
      <Icon></Icon>
    ):("")} */}
      <Image src={logo} alt="Logo" width={100} height={100} />
      <div className={styles.title}>
        <TitlePage color="#494949">PT. Cipta Kualitas Teknologi</TitlePage>
      </div>
      <div className={styles.navbarcontent}>
        <NavbarPage paddingRight="30px" color="#494949">
          Home
        </NavbarPage>
        <NavbarPage paddingRight="30px" color="#494949">
          Product
        </NavbarPage>
        <NavbarPage paddingRight="30px" color="#494949">
          About
        </NavbarPage>
        <NavbarPage paddingRight="30px" color="#494949">
          Contact
        </NavbarPage>
      </div>
    </div>
  )
}

export default Navbar
