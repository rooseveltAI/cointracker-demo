import { chakra, Grid } from '@chakra-ui/react'
import React from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'

type AppLayoutProps = {
  children: React.ReactElement
}

export const Layout = ({ children, ...props }: AppLayoutProps) => {
  return (
    <>
      <Grid
        templateColumns="1fr"
        templateRows="70px 1fr"
        templateAreas={{
          base: `"nav nav" "main main" "footer footer"`,
          sm: `"nav nav" "main main" "footer footer"`,
          lg: `"nav nav" "main main" "footer footer"`
        }}
        minH="100vh"
      >
        <Navbar />
        <chakra.main gridArea="main" w="100%">
          {children}
        </chakra.main>
        <Footer />
      </Grid>
    </>
  )
}
