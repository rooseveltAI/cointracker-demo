import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from 'theme'
import 'fonts.css'
import 'remixicon/fonts/remixicon.css'
import { Layout } from 'components/app.layouts'

// const LayoutDefault = ({ children }: any) => <>{children}</>

export default function App({ Component, pageProps }: any) {
  // const Layout = Component.Layout || LayoutDefault
  // const layoutProps = pageProps.layoutProps || {}

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Cointracker</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
