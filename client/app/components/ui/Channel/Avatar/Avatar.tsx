import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsFillCheckCircleFill } from 'react-icons/bs'

import { AvatarProps } from "./Avatar.interface"
import styles from './Avatar.module.scss'
import { GiFalling } from "react-icons/gi"


const Avatar: React.FC<AvatarProps> = ({ channel }) => {  
  return (
    <Link href={`/channels/${channel.id}`}>
      <a>
        <div 
          className={styles.channel_avatar}
        >
          {channel.avatarPath ? (
            <Image
              className={styles.channel_avatar__image}
              src={channel.avatarPath}
              alt={channel.name}
              layout='fill'
            />
          ) : (
            <GiFalling className={styles.channel_avatar__icon}/>
          )}

          {channel.isVerified && (
            <div className={styles.channel_avatar__verification_icon}>
              <BsFillCheckCircleFill/>
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default Avatar