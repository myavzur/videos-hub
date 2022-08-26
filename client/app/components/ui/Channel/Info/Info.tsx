import React, { useEffect } from "react"

import ChannelAvatar from "@/components/ui/Channel/Avatar"
import ChannelName from "@/components/ui/Channel/Name"

import { formatNumToShort } from "@/utils/format-num-to-short"

import { InfoProps } from "./Info.interface"
import styles from './Info.module.scss'

const Info: React.FC<InfoProps> = ({ channel, message }) => {
  return (
    <div className={styles.info}>
      <div className={styles.info__avatar}>
        <ChannelAvatar channel={channel}/>
      </div>

      <div className={styles.info__content}>
        <div className={styles.info__content_name}> 
          <ChannelName channel={channel}/>
        </div>

        <div className={styles.info__content_message}> 
          {message ? message : `${formatNumToShort(channel.subscribersValue)} subscribers`}
        </div>
      </div>
    </div>
  )
}

export default Info