import { ChakraProvider } from "@chakra-ui/react"
import { AppContainer } from "@/components"
import { theme } from "@/theme"
import "@fontsource/lato"
import "@fontsource/open-sans"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  )
}

export default MyApp
