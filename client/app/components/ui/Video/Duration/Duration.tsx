import React from "react"
import cn from "classnames"

import { DurationProps } from "./Duration.interface"
import styles from './Duration.module.scss'


const Duration: React.FC<DurationProps> = ( { duration, position } ) => {
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