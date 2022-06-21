import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'

const pageTitle = 'Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{pageTitle} - PT. Cipta Kualitas Teknologi</title>
        <meta name="description" content="PT. Cipta Kualitas Teknologi" />
      </Head>
      <Navbar />
    </>
  )
}

export default Home
