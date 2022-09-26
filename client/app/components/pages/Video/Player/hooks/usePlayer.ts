import { useRef, useState, useEffect, useCallback } from 'react'

import { PlayerElement } from '../Player.interface'
import { UsePlayer } from './usePlayer.interface'

export const usePlayer: UsePlayer = ({ options }) => {
  const playerRef = useRef<PlayerElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)


  // * Set original duration of video ⏲
  useEffect(() => {
    const duration = playerRef.current?.duration

    if (duration) {
      setDuration(duration)
    }
  }, [playerRef.current?.duration])


  // * Play/Pause video 🎶
  const togglePlaying = useCallback(async () => {
    if (!isPlaying) {
      playerRef.current?.play()
      setIsPlaying(true)
    }
    else {
      playerRef.current?.pause()
      setIsPlaying(false)
    }
  }, [isPlaying])


  // * Enable/Disable Fullscreen 💻
  const toggleFullscreen = async () => {
    const player = playerRef.current

    if (!player) return undefined
    if (player.requestFullscreen) return player.requestFullscreen()
    if (player.msRequestFullscreen) return player.msRequestFullscreen()
    if (player.mozRequestFullscreen) return player.mozRequestFullscreen()
    if (player.webkitRequestFullscreen) return player.webkitRequestFullscreen()
  }


  // * Rewind video ⏲
  const rewind = useCallback((time: number) => {
    if (playerRef.current) {
      playerRef.current.currentTime += time
    }
  }, [])

  const forward  = useCallback(() => {
    rewind(options.rewindTime)
  }, [rewind, options])

  const backward = useCallback(() => {
    rewind(-options.rewindTime)
  }, [rewind, options])


  // * Event listener for Updating time ⏲
  useEffect(() => {
    const player = playerRef.current

    if (!player) return undefined
    
    const updateProgress = () => {
      setCurrentTime(player.currentTime)
      setProgress((player.currentTime / duration) * 100)
    }

    player.addEventListener('timeupdate', updateProgress)
    return () => player.removeEventListener('timeupdate', updateProgress)
  }, [duration])

  // * Event listener for Hotkeys 🔥
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight': return forward()
        case 'ArrowLeft': return backward()
        case 'f': return toggleFullscreen()
        case ' ': {
          e.preventDefault()
          return togglePlaying()
        }
        default: return null
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [togglePlaying, backward, forward])


  
  return [
    playerRef,
    {
      toggleFullscreen,
      togglePlaying
    },
    {
      isPlaying,
      currentTime,
      duration,
      progress
    }
  ]
}