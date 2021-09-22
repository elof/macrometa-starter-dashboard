import React, { createContext, useContext } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"

const FullScreenContext = createContext()
FullScreenContext.displayName = "FullScreenContext"

function FullScreenProvider ({ ...rest }) {
  const handle = useFullScreenHandle()
  return (
    <FullScreenContext.Provider value={handle}>
      <FullScreen handle={handle} {...rest} />
    </FullScreenContext.Provider>
  )
}

function useFullScreen() {
  const context = useContext(FullScreenContext)
  if (context === undefined) {
    throw new Error("useFullScreen must be used within a FullScreenProvider")
  }
  return context
}

export {
  FullScreenProvider,
  useFullScreen
}