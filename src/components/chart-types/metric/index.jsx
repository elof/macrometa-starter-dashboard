import React, { memo } from "react"
import { Text, useColorModeValue } from "@chakra-ui/react"
import { ChartGridItem } from "@/components"

const Metric = memo(props => {
  const {
    colorScheme = "primary",
    note = " ",
    title = " ",
    value,
    ...rest
  } = props

  const rampValue = useColorModeValue("400", "600")

  return (
    <ChartGridItem
      bgColor={`${colorScheme}.${rampValue}`}
      color="white"
      note={note}
      title={title}
      {...rest}
    >
      <Text
        fontSize="7xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        {value}
      </Text>
    </ChartGridItem>
  )
})

export { Metric }