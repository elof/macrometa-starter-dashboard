import React, { memo } from "react"
import {
  Center,
  useColorModeValue
} from "@chakra-ui/react"

const Footer = memo(({ }) => {
  const borderColor = useColorModeValue("gray.100", "gray.700")
  return (
    <Center
      borderTopColor={borderColor}
      borderTopWidth={1}
      color="gray.500"
      fontSize="xs" 
      px={4}
      py={4}
    >
      &copy;{new Date().getFullYear()} Macrometa &ndash; All rights reserved
    </Center>
  )
})

export { Footer }