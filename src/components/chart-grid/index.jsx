import React, { memo } from "react"
import { Grid } from "@chakra-ui/react"

const ChartGrid = memo(({ columns = 3, rows = 4, ...rest }) => {
  return (
    <Grid
      gap={4}
      templateColumns={{ base: "1fr", lg: `repeat(${columns}, 1fr)` }}
      templateRows={`repeat(${rows}, 1fr)`}
      {...rest}
    />
  )
})

export { ChartGrid }