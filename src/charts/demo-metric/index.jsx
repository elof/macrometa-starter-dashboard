import React, { memo, useState } from "react"
import { Select } from "@chakra-ui/react"
import { Metric } from "@/components"

const DemoMetric = memo(({ ...rest }) => {
  const [demoColor, setDemoColor] = useState("indigo")

  return (
    <Metric
      colorScheme={demoColor}
      controls={
        <Select
          colorScheme={demoColor}
          onChange={e => setDemoColor(e.target.value)}
          size="sm"
          value={demoColor}
          w="auto"
          _focus={{ shadow: "none" }}
        >
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
      value="2.4k"
      {...rest}
    />
  )
})

export { DemoMetric }