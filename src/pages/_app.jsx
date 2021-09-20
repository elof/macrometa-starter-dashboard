import Head  from 'next/head'

import {
  Box,
  ChakraProvider,
  Flex  
} from "@chakra-ui/react"

import { Footer, Header } from "@/components"
import { theme } from "@/theme"
import "@fontsource/lato"
import "@fontsource/open-sans"

function MyApp({ Component, pageProps }) {
  const siteName = `Macrometa Starter App`
  const siteDesc = `Build faster, real-time applications and APIs on our secure, programmable stateful-serverless Edge Cloud.`
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDesc} key="site-desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteName} key="og-title" />
        <meta property="og:description" content={siteDesc} key="og-desc" />
        {/* <meta property="og:url" content={ogUrl} key="og-url" />
        <meta property="og:image" content={ogImage} key="og-image" /> */}
        <meta property="og:site_name" content={siteName} key="og-sitename" />
        <meta property="og:locale" content="en_US" />

        {/* Favicons */}
        <link href={`/images/favicon-32x32.png`} rel="icon" sizes="32x32" type="image/png" />
        <link href={`/images/favicon-16x16.png`} rel="icon" sizes="16x16" type="image/png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Flex direction="column" minHeight="100vh">
          <Header title={siteName} />
          <Box flex={1} px={4} py={5}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default MyApp
