import React, { memo } from "react"
import {
  Flex,
  Heading,
  useColorModeValue
} from "@chakra-ui/react"
import { Logotype } from "@/components"

const Header = memo(({ description = "", title = "" }) => {
  const borderColor = useColorModeValue("gray.100", "gray.700")
  const headingColor = useColorModeValue("primary.500", "primary.200")
  const descriptionColor = useColorModeValue("gray.700", "gray.100")
  return (
    <Flex
      align="center"
      borderBottomColor={borderColor}
      borderBottomWidth={1}
      px={4}
      py={3}
    >
      <Logotype mr={2} />
      {title && (
        <Heading
          color={headingColor}
          fontSize="sm"
          lineHeight={6}
          ml={2}
          pt={1}
        >
          {title}
        </Heading>
      )}
      {description && (
        <Heading
          color={descriptionColor}
          fontSize="sm"
          fontWeight="normal"
          lineHeight={6}
          ml={2}
          pt={1}
        >
          {description}
        </Heading>
      )}
    </Flex>
  )
})

export { Header }