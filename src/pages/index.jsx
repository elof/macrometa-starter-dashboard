import { Select, Text } from "@chakra-ui/react"
import { ChartGrid, ChartGridItem } from "@/components"

export default function Home() {
  return (
    <ChartGrid>
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
      >
        Chart Content
      </ChartGridItem>

      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
        bgColor="indigo.500"
        color="white"
        rowSpan={2}
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
        rowSpan={2}
      >
        Chart Content
      </ChartGridItem>
      
      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
      >
        Chart Content
      </ChartGridItem>
      
      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
      >
        Chart Content
      </ChartGridItem>

      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
      >
        Chart Content
      </ChartGridItem>
    </ChartGrid>
  )
}
