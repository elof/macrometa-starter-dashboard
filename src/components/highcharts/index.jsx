/**
 * https://api.highcharts.com/highcharts/
 */

import React, { memo, useMemo } from "react"
import HC from "highcharts"
import HCAccessibility from "highcharts/modules/accessibility"
import HCExporting from "highcharts/modules/exporting"
import HCReact from "highcharts-react-official"

import {
  Box,
  useColorMode,
  useTheme,
} from "@chakra-ui/react"

if (typeof HC === "object") {
  HCAccessibility(HC)
  HCExporting(HC)
}

const Highcharts = memo(({ options, ...rest }) => {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  const defaultTheme = useMemo(() => {
    const colorRampValue = colorMode === "dark" ? 300 : 500
    const borderColor = colorMode === "dark" ? theme.colors.gray["200"] : theme.colors.gray["600"]
    const textColor = colorMode === "dark" ? theme.colors.gray["600"] : theme.colors.gray["200"]

    return {
      chart: {
        animation: "none",
        backgroundColor: "transparent",
        borderColor: borderColor,
        color: textColor,
        style: {
          fontFamily: theme.fonts.body
        },
        type: "area"
      },
      colors: [
        theme.colors.teal[colorRampValue],
        theme.colors.blue[colorRampValue],
        theme.colors.red[colorRampValue],
        theme.colors.indigo[colorRampValue],
        theme.colors.yellow[colorRampValue],
        theme.colors.pink[colorRampValue],
        theme.colors.green[colorRampValue],
        theme.colors.orange[colorRampValue]
      ],
      credits: {
        text: ""
      },
      exporting: {
        enabled: false
      },
      legend: {
        align: "right",
        itemHiddenStyle: {
          color: theme.colors.gray["500"]
        },
        itemHoverStyle: {
          color: theme.colors.primary["500"]
        },
        itemMarginTop: 4,
        itemMarginBottom: 4,
        itemStyle: {
          color: textColor,
          fontSize: "13px",
          transform: "translateY(-2px)"
        },
        layout: "vertical",
        symbolHeight: 16,
        symbolPadding: 8,
        verticalAlign: "top"
      },
      plotOptions: {
        area: {
          marker: {
            radius: 4,
            symbol: "circle"
          },
          stacking: "normal"
        }
      },
      title: undefined,
      xAxis: {
        gridLineColor: borderColor,
        labels: {
          style: {
            color: textColor
          }
        },
        lineColor: borderColor,
        minorGridLineColor: borderColor,
        minorTickColor: textColor,
        tickColor: borderColor,
        title: {
          style: {
            color: textColor
          },
          text: "X Axis"
        }
      },
      yAxis: {
        gridLineColor: borderColor,
        labels: {
          style: {
            color: textColor
          }
        },
        lineColor: borderColor,
        minorGridLineColor: borderColor,
        minorTickColor: borderColor,
        tickColor: borderColor,
        title: {
          style: {
            color: textColor
          },
          text: "Y Axis"
        }
      }
    }
  }, [colorMode, theme])

  return (
    <Box w="full">
      <HCReact
        colorMode={colorMode}
        highcharts={HC}
        options={{
          ...defaultTheme,
          ...options
        }}
        callback={(c) => c.render()}
        {...rest}
      />
    </Box>
  )
})

export { Highcharts }