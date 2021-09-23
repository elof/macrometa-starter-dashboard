import React, { memo } from "react"
import { ResponsiveStream } from "@nivo/stream"
import { useColorModeValue, useToken } from "@chakra-ui/react"

import { ChartGridItem } from "@/components"
import data from "./sample-data.json"

const DemoStreamChart = memo(({ ...rest }) => {
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
    <ChartGridItem {...rest}>
      <ResponsiveStream
        data={data}
        keys={Object.keys(data[0])}
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
          tickValues: 5,
          legend: 'count',
          legendOffset: -54,
          legendPosition: 'middle'
        }}
        borderColor={{ theme: 'background' }}
        enableGridX={false}
        enableGridY={true}
        fillOpacity={0.85}
        margin={{ top: 8, right: 140, bottom: 60, left: 60 }}
        offsetType="none"
        order="none"
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

export { DemoStreamChart }