import React from "react"

import { BadgeProps } from './Badge.interface'
import styles from './Badge.module.scss'


const Badge: React.FC<BadgeProps> = ( props ) => {
  return (
    <div className={styles.badge}>
      <props.icon className={styles.badge__icon}/>

      <p className={styles.badge__label}> 
        {props.label} 
      </p>
    </div>
  )
}

export default Badge