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

const Highcharts = memo(({ options = {}, ...rest }) => {
  const { colorMode } = useColorMode()
  const theme = useTheme()

  const themedOptions = useMemo(() => {
    /**
     * Destructures the `options` configuration object and then
     * reassemble with theme attributes applied as defaults.
     */
    const colorRampValue = colorMode === "dark" ? 600 : 400
    const themeBorderColor = colorMode === "dark" ? theme.colors.gray["600"] : theme.colors.gray["200"]
    const themeTextColor = colorMode === "dark" ? theme.colors.gray["500"] : theme.colors.gray["500"]
    const themeTextColorHidden = colorMode === "dark" ? theme.colors.gray["700"] : theme.colors.gray["200"]
    const themeTextColorHover = colorMode === "dark" ? theme.colors.gray["200"] : theme.colors.gray["800"]

    const {
      chart = {},
      colors = [],
      credits = {},
      exporting = {},
      legend = {},
      plotOptions = {},
      title,
      xAxis = {},
      yAxis = {},
    } = options

    const {
      animation = "none",
      backgroundColor = "transparent",
      borderColor = themeBorderColor,
      color = themeTextColor,
      style = {},
      type = "line"
    } = chart

    const {
      align = "right",
      itemHiddenStyle = {},
      itemHoverStyle = {},
      itemMarginTop = 4,
      itemMarginBottom = 4,
      itemStyle = {},
      layout = "vertical",
      symbolHeight = 16,
      symbolPadding = 8,
      verticalAlign = "top"
    } = legend

    let styledPlotOptions = { ...plotOptions }
    if (type) {
      styledPlotOptions[type] = {
        marker: {
          radius: 4,
          symbol: "circle"
        },
        ...styledPlotOptions[type]
      }
    }

    const xAxisLabels = xAxis.labels || {}
    const xAxisTitle = xAxis.title || {}
    
    const yAxisLabels = yAxis.labels || {}
    const yAxisTitle = yAxis.title || {}

    const output = {
      ...options,
      chart: {
        animation,
        backgroundColor,
        borderColor,
        color,
        style: {
          fontFamily: theme.fonts.body,
          ...style
        },
        type
      },
      colors: [
        ...colors,
        theme.colors.teal[colorRampValue],
        theme.colors.blue[colorRampValue],
        theme.colors.red[colorRampValue],
        theme.colors.indigo[colorRampValue],
        theme.colors.yellow[colorRampValue],
        theme.colors.pink[colorRampValue],
        theme.colors.green[colorRampValue],
        theme.colors.orange[colorRampValue],
        theme.colors.purple[colorRampValue]
      ],
      credits: {
        text: "",
        ...credits
      },
      exporting: {
        enabled: false,
        ...exporting
      },
      legend: {
        align,
        itemHiddenStyle: {
          color: themeTextColorHidden,
          ...itemHiddenStyle
        },
        itemHoverStyle: {
          color: themeTextColorHover,
          ...itemHoverStyle
        },
        itemMarginTop,
        itemMarginBottom,
        itemStyle: {
          color: themeTextColor,
          fontSize: "13px",
          transform: "translateY(-2px)",
          ...itemStyle,
        },
        layout,
        symbolHeight,
        symbolPadding,
        verticalAlign,
      },
      plotOptions: styledPlotOptions,
      title,
      xAxis: {
        gridLineColor: themeBorderColor,
        labels: {
          style: {
            color: themeTextColor
          },
          ...xAxisLabels
        },
        lineColor: themeBorderColor,
        minorGridLineColor: themeBorderColor,
        minorTickColor: themeTextColor,
        tickColor: themeBorderColor,
        title: {
          style: {
            color: themeTextColor
          },
          ...xAxisTitle
        },
        ...xAxis
      },
      yAxis: {
        gridLineColor: themeBorderColor,
        labels: {
          style: {
            color: themeTextColor
          },
          ...yAxisLabels
        },
        lineColor: themeBorderColor,
        minorGridLineColor: themeBorderColor,
        minorTickColor: themeBorderColor,
        tickColor: themeBorderColor,
        title: {
          style: {
            color: themeTextColor
          },
          ...yAxisTitle
        },
        ...yAxis
      }
    }
    return output
  }, [colorMode, options, theme])

  return (
    <Box w="full">
      <HCReact
        highcharts={HC}
        options={themedOptions}
        {...rest}
      />
    </Box>
  )
})

export { Highcharts }