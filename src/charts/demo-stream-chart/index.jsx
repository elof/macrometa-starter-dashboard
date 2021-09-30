import React, { memo } from "react"
import { ChartGridItem, Highcharts } from "@/components"
import { genRandom, repeatN } from "@/utils"

const DemoStreamChart = memo(({ ...rest }) => {
  const options = {
    chart: {
      type: "spline"
    },
    plotOptions: {
      spline: {}
    },
    yAxis: {
      title: { text: "" }
    },
    series: [
      { data: repeatN(genRandom(9999), 24), name: "Blue" },
      { data: repeatN(genRandom(9999), 24), name: "Red" }
    ]
  }

  return (
    <ChartGridItem {...rest}>
      <Highcharts options={options} />
    </ChartGridItem>
  )
})

export { DemoStreamChart }