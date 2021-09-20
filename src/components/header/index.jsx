import React, { memo } from "react"
import {
  Flex,
  Heading
} from "@chakra-ui/react"

const Header = memo(({ title = "" }) => {
  return (
    <Flex
      borderBottomColor="gray.700"
      borderBottomWidth={1}
      px={4}
      py={5}
    >
      {title && (
        <Heading as="h1" size="md">
          {title}
        </Heading>
      )}
    </Flex>
  )
})

export { Header }