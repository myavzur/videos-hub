import React from "react"
import Image from "next/image"
import Link from "next/link"
import cn from "classnames"
import { AiFillCheckCircle } from 'react-icons/ai'

import { AvatarProps } from "./Avatar.interface"
import styles from './Avatar.module.scss'


const Avatar: React.FC<AvatarProps> = ({ channel, color }) => {
  return (
    <Link href={`/channels/${channel.id}`}>
      <a>
        <div 
          className={cn(
            styles['channel-avatar'], 
            {[styles[`channel-avatar_${color}`]]: !!color})
          }
        >
          <Image
            className={styles['channel-avatar__image']}
            src={channel.avatarPath}
            alt={channel.name}
            width={45}
            height={45}
          />

          {channel.isVerified && (
            <div className={styles['channel-avatar_verified']}>
              <AiFillCheckCircle/>
            </div>
          )}
        </div>
      </a>
    </Link>
  )
}

export default Avatar