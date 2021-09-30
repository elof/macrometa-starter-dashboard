import React, { memo } from "react"
import { ChartGridItem, Highcharts } from "@/components"

const DemoPieChart = memo(({ ...rest }) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    legend: {
      itemStyle: {
        fontSize: "11px"
      },
      verticalAlign: "middle"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        borderColor: "transparent",
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        innerSize: "50%",
        data: [
          {
            name: "Chrome",
            y: 61.41,
            // selected: true,
            // sliced: true
          },
          {
            name: "Brave",
            y: 11.84
          },
          {
            name: "Firefox",
            y: 10.85
          },
          {
            name: "Edge",
            y: 4.67
          },
          {
            name: "Safari",
            y: 4.18
          },
          {
            name: "IE",
            y: 1.64
          },
          {
            name: "Opera",
            y: 1.6
          },
          {
            name: "QQ",
            y: 1.2
          },
          {
            name: "Other",
            y: 2.61
          }
        ]
      }
    ],
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    accessibility: {
      point: {
        valueSuffix: "%"
      }
    }
  }

  return (
    <ChartGridItem {...rest}>
      <Highcharts options={options} />
    </ChartGridItem>
  )
})

export { DemoPieChart }