import Link from "next/link"
import React from "react"
import { AiFillCheckCircle } from "react-icons/ai"

import { NameProps } from './Name.interface'
import styles from './Name.module.scss'


const Name: React.FC<NameProps> = ({ channel, withIcon = true }) => {
  return (
    <Link href={`/channels/${channel.id}`}>
      <a className={styles.content}>
        <div className={styles.name}> 
          {channel.name} 
        </div>

        {(withIcon && channel.isVerified) && (
          <AiFillCheckCircle className={styles.verification_icon} />
        )}
      </a>
    </Link>
  )
}

export default Name