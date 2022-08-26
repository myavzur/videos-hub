import React from "react"
import { IoMdPause, IoMdPlay } from 'react-icons/io'

import { PlayerProps } from './Player.interface'
import { usePlayer } from "./hooks"

import styles from './Player.module.scss'
import { BsFullscreen } from "react-icons/bs"


const Player: React.FC<PlayerProps> = ({ videoPath }) => {
  const [ bind, controls, status ] = usePlayer({
    options: {
      initialPlaying: true,
      rewindTime: 15
    }
  })

  return (
    <div className={styles.player}>
      <video
        {...bind}
        className={styles.player__video}
        src={`${videoPath}`} // ? 2nd second to prevent black screen
        preload='metadata'
        onClick={controls.togglePlaying}
      />

      <div className={styles.controls}>
        <button onClick={controls.togglePlaying}>
          {status.isPlaying ? <IoMdPause/> : <IoMdPlay/>}
        </button>

        <div className={styles.controls__progress}>
          <div
            className={styles.controls__progress_inner}
            style={{
              width: `${status.progress}%`
            }}
          />
        </div>

        <div className={styles.controls__time}>
          <p>
            {Math.floor(status.currentTime / 60) + ':' + ('0' + Math.floor(status.currentTime % 60)).slice(-2)} 
          </p>
          
          <p> / </p>

          <p>
            {Math.floor(status.currentTime / 60) + ':' + ('0' + Math.floor(status.duration % 60)).slice(-2)} 
          </p>
        </div>

        <button onClick={controls.toggleFullscreen}>
          <BsFullscreen />
        </button>
      </div>
    </div>
  )
}

export default Player