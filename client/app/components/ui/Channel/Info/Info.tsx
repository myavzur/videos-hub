import React from "react"

import ChannelAvatar from "@/components/ui/Channel/Avatar"
import { formatNumToShort } from "@/utils/format-num-to-short"

import { InfoProps } from "./Info.interface"
import styles from './Info.module.scss'

const Info: React.FC<InfoProps> = ({ channel, message }) => {
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

export default Info