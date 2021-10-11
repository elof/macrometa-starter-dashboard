import { Link } from "@chakra-ui/react"

import {
  DemoLineChart,
  DemoMetric,
  DemoPieChart,
  DemoStreamChart
} from "@/charts"

import {
  ChartGrid,
  Metric
} from "@/components"

import {
  createStreamReader,
  executeRestql,
  startStreamApps,
  stopStreamApps
} from "@/services"

export default function Home() {
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

      <DemoMetric
        title="Dynamic Metric"
        note="Select a color"
        rowSpan={1}
      />

      <Metric
        title="Green Metric"
        note="Helpful notes go here"
        colorScheme="green"
        value="0.68"
      />

      <DemoStreamChart
        title="HTTP Response Codes"
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
