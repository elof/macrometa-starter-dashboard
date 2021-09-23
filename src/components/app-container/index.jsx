import React, { memo, useCallback, useEffect, useState } from "react"
import Head  from "next/head"
import { useRouter } from "next/router"

/* Components */
import {
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react"
import { Footer } from '../footer'
import { Header } from '../header'

/* Content */
import content from "@/content.yaml"

/* Asssets */
import SocialCard from '/public/images/social-card.png'

const AppContainer = memo(({ children }) => {
  const router = useRouter()

  /* Color Management */
  const bgColor = useColorModeValue("white", "gray.800")
  const contentBgColor = useColorModeValue("gray.50", "gray.900")
  const [systemColorMode, setSystemColorMode] = useState('light')
  const viewport = useBreakpointValue({ base: "mobile", lg: "desktop" })

  /* Content */
  const baseUrl = typeof window !== 'undefined' ? `${location.protocol}//${location.host}` : ''
  const siteName = content.heading
  const siteDesc = content.subheading
  const ogImage = `${baseUrl}${SocialCard.src}`
  const ogUrl = `${baseUrl}${router.asPath}`

  const onSystemColorModeChange = useCallback(({ matches }) => {
    setSystemColorMode(matches ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      mq.addEventListener('change', onSystemColorModeChange)
      onSystemColorModeChange(mq)
    }
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', onSystemColorModeChange)
    }
  })

  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteDesc} key="site-desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteName} key="og-title" />
        <meta property="og:description" content={siteDesc} key="og-desc" />
        <meta property="og:url" content={ogUrl} key="og-url" />
        <meta property="og:image" content={ogImage} key="og-image" />
        <meta property="og:site_name" content={siteName} key="og-sitename" />
        <meta property="og:locale" content="en_US" />

        {/* Favicons */}
        {/* <link href={`/images/favicon/${systemColorMode}/apple-touch-icon.png`} rel="apple-touch-icon" sizes="180x180" />
        <link href={`/images/favicon/${systemColorMode}/favicon.ico`} rel="icon" /> */}
        <link href={`/images/favicon/${systemColorMode}/favicon-32x32.png`} rel="icon" sizes="32x32" type="image/png" />
        <link href={`/images/favicon/${systemColorMode}/favicon-16x16.png`} rel="icon" sizes="16x16" type="image/png" />
      </Head>
      <Flex
        bgColor={bgColor}
        direction="column"
        minHeight="100vh"
        pt={viewport === "mobile" ? "72px" : 0}
      >
        <Header
          bgColor={bgColor}
          boxShadow={viewport === "mobile" ? "sm" : "none"}
          title={siteName}
          description={siteDesc}
          position={viewport === "mobile" ? "fixed" : "relative"}
          top={0}
          w="full"
          zIndex={1}
        />
        <Box
          bgColor={contentBgColor}
          flex={1}
          px={4}
          py={5}
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
})

export { AppContainer }