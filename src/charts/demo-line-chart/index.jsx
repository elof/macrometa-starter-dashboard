import React, { memo } from "react"
import { Select } from "@chakra-ui/react"
import { ChartGridItem, Highcharts } from "@/components"
import { genRandom, repeatN } from "@/utils"

const DemoLineChart = memo(({ ...rest }) => {
  const options = {
    chart: {
      type: "area"
    },
    plotOptions: {
      area: {
        stacking: "normal"
      }
    },
    series: [
      { data: repeatN(genRandom(9999), 24), name: "Teal" },
      { data: repeatN(genRandom(9999), 24), name: "Blue" },
      { data: repeatN(genRandom(9999), 24), name: "Red" },
      { data: repeatN(genRandom(9999), 24), name: "Indigo" },
      { data: repeatN(genRandom(9999), 24), name: "Yellow" },
      { data: repeatN(genRandom(9999), 24), name: "Pink" },
      { data: repeatN(genRandom(9999), 24), name: "Green" },
      { data: repeatN(genRandom(9999), 24), name: "Orange" },
      { data: repeatN(genRandom(9999), 24), name: "Purple" }
    ],
    xAxis: {
      title: {
        text: "X-Axis Title"
      }
    },
    yAxis: {
      title: {
        text: "Y-Axis Title"
      }
    }
  }

  return (
    <ChartGridItem
      controls={
        <Select size="sm" w="auto">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      }
      {...rest}
    >
      <Highcharts options={options} />
    </ChartGridItem>
  )
})

export { DemoLineChart }