import { ChartGrid, ChartGridItem } from "@/components"

export default function Home() {
  return (
    <ChartGrid>
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
      
      <ChartGridItem
        title="Chart Title"
        note="This is a footnote!"
      >
        Chart Content
      </ChartGridItem>
    </ChartGrid>
  )
}
