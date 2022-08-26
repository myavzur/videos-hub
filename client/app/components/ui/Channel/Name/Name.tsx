import Link from "next/link"
import React from "react"
import { BsFillCheckCircleFill } from "react-icons/bs"

import { NameProps } from './Name.interface'
import styles from './Name.module.scss'


const Name: React.FC<NameProps> = ({ channel, withIcon }) => {
  return (
    <Link href={`/channels/${channel?.id || 'NO DATA'}`}>
      <a className={styles.content}>
        <div className={styles.name}> 
          {channel?.name || 'NO DATA'} 
        </div>

        {(withIcon && channel?.isVerified) && (
          <BsFillCheckCircleFill className={styles.verification_icon} />
        )}
      </a>
    </Link>
  )
}

export default Name