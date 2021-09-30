import { useState } from "react"
import { Link, Select } from "@chakra-ui/react"

import {
  DemoLineChart,
  DemoPieChart,
  DemoStreamChart
} from "@/charts"
import { ChartGrid, Metric } from "@/components"

export default function Home() {
  const [demoColor, setDemoColor] = useState("indigo")
  return (
    <ChartGrid columns={3} rows={4}>

      <DemoLineChart
        title="Stacked Series"
        note={
          <Link color="primary.400" href="#inline-links">Notes support links, too!</Link>
        }
        colSpan={{ base: 1, lg: 2 }}
        rowSpan={2}
      />

      <Metric
        title="Dynamic Metric"
        note="Select a color"
        colorScheme={demoColor}
        controls={
          <Select
            colorScheme={demoColor}
            onChange={e => setDemoColor(e.target.value)}
            size="sm"
            value={demoColor}
            w="auto"
            _focus={{ shadow: "none" }}
          >
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
        title="Green Metric"
        note="Helpful notes go here"
        colorScheme="green"
        value="0.68"
      />

      <DemoStreamChart
        title="HTTP Response Codes"
        // note="This is a footnote!"
        colSpan={{ base: 1, lg: 2 }}
        rowSpan={1}
      />
      
      <DemoPieChart
        title="Browser Usage"
        note="Resolution: 4hr"
        rowSpan={2}
      />

      <Metric
        title="Median Order Size"
        note="This is a footnote!"
        colorScheme="pink"
        value="$24.96"
      />

      <Metric
        title="Threshold"
        note="🎶 And it was all yellow, ooh!"
        colorScheme="yellow"
        value="-0.23"
      />

    </ChartGrid>
  )
}
