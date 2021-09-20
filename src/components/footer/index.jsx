import React, { memo } from "react"
import {
  Center
} from "@chakra-ui/react"

const Footer = memo(({ }) => {
  return (
    <Center
      borderTopColor="gray.700"
      borderTopWidth={1}
      color="gray.500"
      fontSize="xs" 
      px={4}
      py={5}
    >
      &copy;{new Date().getFullYear()} Macrometa &ndash; All rights reserved
    </Center>
  )
})

export { Footer }