/**
 * https://github.com/chakra-ui/chakra-ui/tree/master/packages/theme
 */

import { 
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme
} from "@chakra-ui/react"

import { colors } from "./colors"
import { global } from "./global"

const theme = extendTheme(
  {
    colors: {
      ...colors,
      primary: baseTheme.colors.indigo
    },
    config: {
      initialColorMode: "system",
      useSystemColorMode: false,
    },
    fonts: {
      body: "'Open Sans', 'ui-sans-serif', sans-serif",
      heading: "'Lato', 'ui-serif', serif",
      mono: "'ui-monospace'"
    }
  }, 
  withDefaultColorScheme({ colorScheme: "primary" })
)

export {
  global,
  theme
}