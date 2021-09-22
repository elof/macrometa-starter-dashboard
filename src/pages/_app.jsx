import { ChakraProvider } from "@chakra-ui/react"
import { AppContainer } from "@/components"
import { FullScreenProvider } from "@/providers"
import { theme } from "@/theme"
import "@fontsource/lato"
import "@fontsource/open-sans"

function MyApp({ Component, pageProps }) {
  return (
    <FullScreenProvider>
      <ChakraProvider theme={theme}>
        <AppContainer>
          <Component {...pageProps} />    
        </AppContainer>
      </ChakraProvider>
    </FullScreenProvider>
  )
}

export default MyApp
