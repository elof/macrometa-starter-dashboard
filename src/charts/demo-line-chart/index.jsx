import React, { memo } from "react"
import { ResponsiveLine } from "@nivo/line"
import { Select, useColorModeValue, useToken } from "@chakra-ui/react"

import { ChartGridItem } from "@/components"
import data from "./sample-data.json"

const DemoLineChart = memo(({ ...rest }) => {
  const [blackAlpha] = useToken("colors", ["blackAlpha"])
  const [fontFamily] = useToken("fonts", ["body"])
  const [fontSize] = useToken("fontSizes", ["xs"])
  const [gray] = useToken("colors", ["gray"])
  const [white] = useToken("colors", ["white"])
  
  const scheme = useColorModeValue("nivo", "dark2")
  const stroke = useColorModeValue(gray['200'], gray['600'])
  const textColor = useColorModeValue(gray['600'], gray['300'])
  const tooltipBgColor = useColorModeValue(white, blackAlpha['800'])

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
      <ResponsiveLine
        data={data}
        colors={{ scheme }}
        theme={{
          // background: "pink",
          textColor: textColor,
          fontFamily: fontFamily,
          fontSize: fontSize,
          axis: {
            domain: {
              line: { stroke: stroke }
            },
            legend: {
              text: { fill: gray['500'] }
            },
            ticks: {
              line: { stroke: stroke },
              text: { fill: textColor }
            }
          },
          grid: {
            line: { stroke: stroke }
          },
          legends: {
            text: { fill: textColor }
          },
          tooltip: {
            container: { backgroundColor: tooltipBgColor }
          }
        }}
        margin={{ top: 8, right: 140, bottom: 60, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 8,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 48,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 8,
          tickRotation: 0,
          tickValues: 7,
          legend: 'count',
          legendOffset: -54,
          legendPosition: 'middle'
        }}
        enableCrosshair={false}
        enableGridX={false}
        pointSize={8}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 24,
            itemOpacity: 0.75,
            symbolSize: 16,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </ChartGridItem>
  )
})

export { DemoLineChart }