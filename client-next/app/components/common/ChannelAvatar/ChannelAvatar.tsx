import { IChannel } from "@/types"
import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { AiFillCheckCircle } from 'react-icons/ai'

import styles from './ChannelAvatar.module.scss'


interface UserAvatarProps {
  channel: IChannel,
  isWhite?: boolean
}

const UserAvatar: React.FC<UserAvatarProps> = ({ channel, isWhite }) => {
  return (
    <Link href={`/channels/${channel.id}`}>
      <a>
        <span className={cn(styles.avatar, {[styles.white]: isWhite})}>
          <Image
            src={channel.avatarPath || ''}
            alt={channel.name}
            width={45}
            height={45}
          />

          {channel.isVerified && (
            <span className={styles.isVerified}>
              <AiFillCheckCircle/>
            </span>
          )}
        </span>
      </a>
    </Link>
  )
}

export default UserAvatar