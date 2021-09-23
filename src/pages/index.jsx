import { useState } from "react"
import { Select } from "@chakra-ui/react"

import {
  DemoLineChart,
  DemoPieChart,
  DemoStreamChart
} from "@/charts"
import { ChartGrid, ChartGridItem, Metric } from "@/components"

export default function Home() {
  const [demoColor, setDemoColor] = useState("indigo")
  return (
    <ChartGrid columns={3} rows={4}>

      <DemoLineChart
        title="Demo Line Chart"
        note="This is a footnote!"
        colSpan={{ base: 1, lg: 2 }}
        rowSpan={2}
      />

      <Metric
        title="Dynamic Metric"
        note="This is a footnote!"
        colorScheme={demoColor}
        controls={
          <Select onChange={e => setDemoColor(e.target.value)} size="sm" value="indigo" w="auto" _focus={{ shadow: "none" }}>
            <option value="blue">Blue</option>
            <option value="cyan">Cyan</option>
            <option value="gray">Gray</option>
            <option value="indigo">Indigo</option>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="red">Red</option>
            <option value="teal">Teal</option>
            <option value="yellow">Yellow</option>
          </Select>
        }
        rowSpan={1}
        value="2.4k"
      />

      <Metric
        title="Teal Metric"
        note="This is a footnote!"
        colorScheme="teal"
        value="0.68"
      />

      <DemoStreamChart
        title="Demo Stream Chart"
        note="This is a footnote!"
        colSpan={{ base: 1, lg: 2 }}
        rowSpan={1}
      />
      
      <DemoPieChart
        title="Demo Pie Chart"
        note="This is a footnote!"
        rowSpan={2}
      />

      <Metric
        title="Gray Metric 1/2"
        note="This is a footnote!"
        colorScheme="gray"
        value="$24.96"
      />

      <Metric
        title="Gray Metric 2/2"
        note="This is a footnote!"
        colorScheme="gray"
        value="-0.23"
      />

    </ChartGrid>
  )
}
