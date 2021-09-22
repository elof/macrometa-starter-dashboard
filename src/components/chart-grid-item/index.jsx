import React, { memo } from "react"
import {
  Center,
  GridItem,
  Heading,
  Text,
  useColorModeValue
} from "@chakra-ui/react"

const ChartGridItem = memo(({ children, note = "", title = "", ...rest }) => {
  const bgColor = useColorModeValue("white", "gray.800")
  const noteColor = useColorModeValue("gray.600", "gray.300")

  return (
    <GridItem
      bgColor={bgColor}
      borderRadius="md"
      px={4}
      py={3}
      shadow="sm"
      {...rest}
    >
      {title && (
        <Heading
          fontSize="md"
          lineHeight={6}
          mb={2}
        >
          {title}
        </Heading>
      )}
      <Center
        // bg="gray.100"
        minHeight="120px"
        fontSize="sm"
        py={2}
      >
        {children}
      </Center>
      {note && (
        <Text
          color={noteColor}
          fontSize="xs"
          lineHeight={5}
          pt={2}
        >
          {note}
        </Text>
      )}
    </GridItem>
  )
})

export { ChartGridItem }