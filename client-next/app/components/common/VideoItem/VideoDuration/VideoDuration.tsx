import React from "react"

import styles from '../VideoItem.module.scss'

interface VideoDurationProps {
  duration: number
  position?: "bottom-right"
}

const VideoDuration: React.FC<VideoDurationProps> = ( { duration, position } ) => {
  return (
    <time 
      className={position}
    >
      {duration}
    </time>
  )
}

export default VideoDuration