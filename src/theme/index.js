/**
 * https://github.com/chakra-ui/chakra-ui/tree/master/packages/theme
 */

import { 
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme
} from "@chakra-ui/react"

import { colors } from "./colors"
import { components } from "./components"
import { global } from "./global"
import { layerStyles } from "./layer-styles"
import { textStyles } from "./text-styles"

const theme = extendTheme(
  {
    colors: {
      ...colors,
      primary: colors.indigo
    },
    components,
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
    fonts: {
      body: "'Open Sans', 'ui-sans-serif', sans-serif",
      heading: "'Lato', 'ui-serif', serif",
      mono: "'ui-monospace'"
    },
    layerStyles,
    textStyles
  }, 
  withDefaultColorScheme({ colorScheme: "primary" })
)

export {
  global,
  theme
}