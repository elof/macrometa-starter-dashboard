import React, { memo } from "react"
import { Grid } from "@chakra-ui/react"

const ChartGrid = memo(({ children, ...rest }) => {
  return (
    <Grid
      gap={4}
      templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      templateRows="repeat(2, 1fr)"
      {...rest}
    >
      {children}
    </Grid>
  )
})

export { ChartGrid }