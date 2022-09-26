import React from "react"

import styles from './Heading.module.scss'


interface HeadingProps {
  children?: string
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <span className={styles.heading}>
      <h2 className={styles['heading__title']}> {children} </h2>
    </span>
  )
}

export default Heading