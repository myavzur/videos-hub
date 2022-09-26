import React, { useRef } from 'react'

import { PlayerElement } from "../Player.interface"

interface UsePlayerParams {
  options: {
    /** Seconds */
    rewindTime: number
  }
}
type UsePlayerResult = [
  React.RefObject<PlayerElement>,
  {
    togglePlaying: () => Promise<void>
    toggleFullscreen: () => Promise<void>
  },
  {
    isPlaying: boolean
    currentTime: number
    duration: number
    progress: number
  }
]

export type UsePlayer = (params: UsePlayerParams) => UsePlayerResult 