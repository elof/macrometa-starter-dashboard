import React, { memo } from "react"

import {
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"

import { 
  IoMoonOutline,
  IoSunnyOutline
} from "react-icons/io5"

import { 
  AiOutlineFullscreen,
  AiOutlineFullscreenExit
} from "react-icons/ai"

import { Logotype } from "@/components"
import { useFullScreen } from "@/providers"

const Header = memo(({ description = "", title = "" }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const fullscreen = useFullScreen()

  const borderColor = useColorModeValue("gray.100", "gray.700")
  const headingColor = useColorModeValue("primary.500", "primary.200")
  const descriptionColor = useColorModeValue("gray.700", "gray.100")

  return (
    <Flex
      align="center"
      borderBottomColor={borderColor}
      borderBottomWidth={1}
      justify="space-between"
      px={4}
      py={3}
    >
      <Flex flex={1}>
        <Logotype mr={2} />
        {title && (
          <Heading
            color={headingColor}
            fontSize="sm"
            lineHeight={6}
            ml={2}
            pt={1}
          >
            {title}
          </Heading>
        )}
        {description && (
          <Heading
            color={descriptionColor}
            fontSize="sm"
            fontWeight="normal"
            lineHeight={6}
            ml={2}
            pt={1}
          >
            {description}
          </Heading>
        )}
      </Flex>
      <Stack isInline={true} justify="flex-end" spacing={2}>

        {/* FullScreen Toggle */}
        <IconButton 
          aria-label={`${fullscreen.active ? "Exit" : "Enter"} fullscreen`}
          borderColor="gray.600"
          icon={
            <Icon as={fullscreen.active ? AiOutlineFullscreenExit : AiOutlineFullscreen} />
          }
          onClick={fullscreen.active ? fullscreen.exit : fullscreen.enter}
          variant="outline"
        />

        {/* ColorMode Toggle */}
        <IconButton 
          aria-label={
            `Switch to ${colorMode === "dark" ? "light" : "dark"} mode`
          }
          borderColor="gray.500"
          icon={
            colorMode === "dark" ? <IoMoonOutline /> : <IoSunnyOutline />
          }
          onClick={toggleColorMode}
          variant="outline"
        />
      </Stack>
    </Flex>
  )
})

export { Header }