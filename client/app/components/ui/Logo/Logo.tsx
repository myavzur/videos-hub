import React from "react"

import { LogoProps } from './Logo.interface'

const Logo: React.FC<LogoProps> = ({}) => {  
  return (
    <span className="logo">
      RandomTube
    </span>
  )
}

export default Logo