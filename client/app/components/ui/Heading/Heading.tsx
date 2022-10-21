import React, { PropsWithChildren } from "react"

import styles from './Heading.module.scss'

const Heading: React.FC< PropsWithChildren > = ({ children }) => {
  return (
    <div className={styles.heading}>
      {children}
    </div>
  )
}

export default Heading