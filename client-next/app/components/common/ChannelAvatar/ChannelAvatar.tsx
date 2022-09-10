import React from "react"
import Image from "next/image"
import Link from "next/link"
import cn from "classnames"
import { AiFillCheckCircle } from 'react-icons/ai'

import { IChannel } from "@/types"

import styles from './ChannelAvatar.module.scss'


interface ChannelAvatarProps {
  channel: IChannel,
  isWhite?: boolean
}

const ChannelAvatar: React.FC<ChannelAvatarProps> = ({ channel, isWhite }) => {
  return (
    <Link href={`/channels/${channel.id}`}>
      <a>
        <div 
          className={cn(
            styles['channel-avatar'], 
            {[styles['channel-avatar_white']]: isWhite})
          }
        >
          <Image
            className={styles['channel-avatar__image']}
            src={channel.avatarPath || ''}
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

export default ChannelAvatar