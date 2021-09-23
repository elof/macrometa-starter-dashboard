import { useState } from "react"
import { Select, Text, useColorModeValue } from "@chakra-ui/react"
import { DemoLineChart } from "@/charts"
import { ChartGrid, ChartGridItem } from "@/components"

export default function Home() {
  const [demoColor, setDemoColor] = useState("indigo")
  const rampValue = useColorModeValue("500", "600")
  return (
    <ChartGrid columns={3} rows={4}>
      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
        controls={
          <Select size="sm" w="auto">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
        }
        colSpan={{ base: 1, lg: 2 }}
        rowSpan={2}
      >
        <DemoLineChart />
      </ChartGridItem>

      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
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
        bgColor={`${demoColor}.${rampValue}`}
        color="white"
        rowSpan={1}
      >
        <Text
          fontSize="7xl"
          fontWeight="bold"
        >
          2.4k
        </Text>
      </ChartGridItem>

      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
        bgColor={`teal.${rampValue}`}
        color="white"
        rowSpan={1}
      >
        <Text
          fontSize="7xl"
          fontWeight="bold"
        >
          0.68
        </Text>
      </ChartGridItem>

      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
        colSpan={{ base: 1, lg: 2 }}
      >
        Chart Content
      </ChartGridItem>
      
      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
        rowSpan={2}
      >
        Chart Content
      </ChartGridItem>

      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
        rowSpan={1}
      >
        Chart Content
      </ChartGridItem>

      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
        rowSpan={1}
      >
        Chart Content
      </ChartGridItem>

    </ChartGrid>
  )
}
