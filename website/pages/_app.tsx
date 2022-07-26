import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import
          url(%apos;https://fonts.googleapis.com/css2?family=Georama:wght@500&family=Quicksand:wght@300;400;500;700&display=swap%apos;);
        </style>
      </Head>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
