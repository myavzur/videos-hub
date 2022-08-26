import React, { useRef } from 'react'

import { PlayerElement } from "../Player.interface"

interface UsePlayerParams {
  options: {
    /** Seconds */
    initialPlaying: boolean,
    rewindTime: number
  }
}
type UsePlayerResult = [
  {
    ref: React.RefObject<PlayerElement>
    autoPlay: boolean
  },
  {
    togglePlaying: () => Promise<void>
    toggleFullscreen: () => Promise<void>
  },
  {
    isFocused: boolean
    isPlaying: boolean
    currentTime: number
    duration: number
    progress: number
  }
]

export type UsePlayer = (params: UsePlayerParams) => UsePlayerResult 