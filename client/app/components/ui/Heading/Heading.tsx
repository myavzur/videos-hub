import React, { PropsWithChildren } from "react"

import { HeadingProps } from "./Heading.interface"
import styles from './Heading.module.scss'

const Heading: React.FC< PropsWithChildren<HeadingProps> > = ({ Type = 'h1', children }) => {
  return (
    <span className={styles.heading}>
      <Type className={styles['heading__title']}> {children} </Type>
    </span>
  )
}

export default Heading