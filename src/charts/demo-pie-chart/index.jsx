import React, { memo } from "react"
import { ResponsivePie } from "@nivo/pie"
import { Select, useColorModeValue, useToken } from "@chakra-ui/react"

import { ChartGridItem } from "@/components"
import data from "./sample-data.json"

const DemoPieChart = memo(({ ...rest }) => {
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
      <ResponsivePie
        data={data}
        colors={{ scheme }}
        theme={{
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
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={textColor}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [ [ 'darker', 1.4 ]] }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 4 ] ] }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 40,
            itemsSpacing: 0,
            itemWidth: 60,
            itemHeight: 16,
            itemTextColor: textColor,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 16,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
      ]}
      />
    </ChartGridItem>
  )
})

export { DemoPieChart }