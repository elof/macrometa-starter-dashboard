import React, { memo } from "react"
import { Text, useColorModeValue } from "@chakra-ui/react"
import { ChartGridItem } from "@/components"

const Metric = memo(({ colorScheme = "primary", value, ...rest }) => {
  const rampValue = useColorModeValue("500", "600")
  return (
    <ChartGridItem
      bgColor={`${colorScheme}.${rampValue}`}
      color="white"
      {...rest}
    >
      <Text
        fontSize="7xl"
        fontWeight="bold"
      >
        {value}
      </Text>
    </ChartGridItem>
  )
})

export { Metric }