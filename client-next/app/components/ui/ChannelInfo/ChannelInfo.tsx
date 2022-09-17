import React from "react"

import { IChannel } from "@/types/entities"

import ChannelAvatar from "@/components/ui/ChannelAvatar"

import { formatNumToShort } from "@/utils/format-num-to-short"

import styles from './ChannelInfo.module.scss'


interface ChannelInfoProps {
  channel: IChannel
}

const ChannelInfo: React.FC<ChannelInfoProps> = ({ channel }) => {
  return (
    <div className={styles['channel-info']}>
      {
        channel?.avatarPath && (
          <ChannelAvatar channel={channel}/>
        ) 
      }

      <div className={styles['channel-info__summary']}>
        <div className={styles['channel-info__summary-name']}> {channel.name} </div>
        <div className={styles['channel-info__summary-subscribers-count']}> 
          {formatNumToShort(channel.subscribersCount)} subscribers 
        </div>
      </div>
    </div>
  )
}

export default ChannelInfo