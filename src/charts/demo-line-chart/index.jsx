import React, { memo } from "react"
import { Select } from "@chakra-ui/react"
import { ChartGridItem, Highcharts } from "@/components"

function genRandom() {
  return Math.floor(Math.random() * 99) + 1
}

function runN(fn, num) {
  return Array.from({ length: num }, (x, i) => {
    return fn();
  })
}

const DemoLineChart = memo(({ ...rest }) => {
  const options = {
    series: [
      { data: runN(genRandom, 24), name: "Teal" },
      { data: runN(genRandom, 24), name: "Blue" },
      { data: runN(genRandom, 24), name: "Red" },
      { data: runN(genRandom, 24), name: "Indigo" },
      { data: runN(genRandom, 24), name: "Yellow" },
      { data: runN(genRandom, 24), name: "Pink" },
      { data: runN(genRandom, 24), name: "Green" },
      { data: runN(genRandom, 24), name: "Orange" }
    ],
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