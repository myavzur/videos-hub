import React from "react"
import { IoMdPause, IoMdPlay } from 'react-icons/io'
import cn from "classnames"

import { PlayerProps } from './Player.interface'
import { usePlayer } from "./hooks"

import styles from './Player.module.scss'
import { BsFullscreen } from "react-icons/bs"


const Player: React.FC<PlayerProps> = ({ videoPath }) => {
  const [ ref, events, status ] = usePlayer({
    options: {
      rewindTime: 15
    }
  })

  return (
    <div className={styles.player}>
      <video
        className={styles['player__video']}
        ref={ref}
        src={`${videoPath}#t=8`} // ? 8th second to prevent black screen
        preload='metadata'
        onClick={events.togglePlaying}
      />

      <div 
        className={cn(
          styles.controls,
          {
            [styles['controls--hidden']]: status.isPlaying
          }
        )}
      >
        <button onClick={events.togglePlaying}>
          {status.isPlaying ? <IoMdPause/> : <IoMdPlay/>}
        </button>

        <div className={styles['controls__progress']}>
          <div
            className={styles['controls__progress-inner']}
            style={{
              width: `${status.progress}%`
            }}
          />
        </div>

        <div className={styles['controls__time']}>
          <p>
            {Math.floor(status.currentTime / 60) + ':' + ('0' + Math.floor(status.currentTime % 60)).slice(-2)} 
          </p>
          
          <p> / </p>

          <p>
            {Math.floor(status.currentTime / 60) + ':' + ('0' + Math.floor(status.duration % 60)).slice(-2)} 
          </p>
        </div>

        <button onClick={events.toggleFullscreen}>
          <BsFullscreen className='text-tiny'/>
        </button>
      </div>
    </div>
  )
}

export default Player