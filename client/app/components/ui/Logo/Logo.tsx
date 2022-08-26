import { BRAND_NAME } from "@/constants/brand.constants"
import React from "react"

import HandsUpSoftLogo from "./HandsUpSoftLogo"

import { LogoProps } from './Logo.interface'
import styles from './Logo.module.scss'

const Logo: React.FC<LogoProps> = ({}) => {  
  return (
    <div className={styles.logo}>
      <HandsUpSoftLogo/>

      <span className={styles.logo__brand}>{BRAND_NAME}</span>
    </div>
  )
}

export default Logo