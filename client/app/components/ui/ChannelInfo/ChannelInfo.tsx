import React from "react"

import ChannelAvatar from "@/components/ui/ChannelAvatar"
import { formatNumToShort } from "@/utils/format-num-to-short"

import { ChannelInfoProps } from "./CommentInfo.interface"
import styles from './ChannelInfo.module.scss'

const ChannelInfo: React.FC<ChannelInfoProps> = ({ channel, message }) => {
  return (
    <div className={styles['channel-info']}>
      {
        channel?.avatarPath && (
          <ChannelAvatar channel={channel}/>
        ) 
      }

      <div className={styles['channel-info__summary']}>
        <div className={styles['channel-info__summary-name']}> {channel?.name || 'NO DATA'}</div>
        <div className={styles['channel-info__summary-subscribers-count']}> 
          {message ? message : `${formatNumToShort(channel?.subscribersCount || 0)} subscribers`}
        </div>
      </div>
    </div>
  )
}

export default ChannelInfo