import React from "react"
import cn from "classnames"

import styles from './Duration.module.scss'


interface VideoDurationProps {
  duration: number
  position?: "bottom-right"
}

const Duration: React.FC<VideoDurationProps> = ( { duration, position } ) => {
  return (
    <time 
      className={cn(
        styles.duration,
        {[styles[`duration_${position}`]]: Boolean(position) }
      )}
    >
      {duration} мин.
    </time>
  )
}

export default Duration