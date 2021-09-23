import React, { memo } from "react"
import {
  Center,
  Flex,
  GridItem,
  Heading,
  Text,
  useColorModeValue
} from "@chakra-ui/react"

const ChartGridItem = memo(props => {
  const {
    children,
    color,
    controls,
    note = "",
    title = "",
    ...rest
  } = props
  const bgColor = useColorModeValue("white", "gray.800")
  const noteColor = useColorModeValue("gray.600", "gray.200")

  return (
    <GridItem
      bgColor={bgColor}
      borderRadius="md"
      color={color}
      display="flex"
      flexDirection="column"
      px={4}
      py={3}
      shadow="sm"
      {...rest}
    >
      <Flex align="center" justify="space-between" mb={2}>
        {title && (
          <Heading
            flexGrow={1}
            fontSize="md"
            lineHeight={6}
          >
            {title}
          </Heading>
        )}
        {controls}
      </Flex>
      <Center
        flex={1}
        fontSize="sm"
        minHeight="144px"
        mx="auto"
        width="99%"
      >
        {children}
      </Center>
      {note && (
        <Text
          color={color || noteColor}
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