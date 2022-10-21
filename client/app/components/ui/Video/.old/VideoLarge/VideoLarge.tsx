import Image from "next/image"
import Link from "next/link"
import React from "react"

import Channel from "@/components/ui/Channel"
import Duration from "@/components/ui/Video/Duration"
import Statistics from "@/components/ui/Video/StatisticsOld"

import { VideoLargeProps } from "./VideoLarge.interface"
import styles from './VideoLarge.module.scss'

const VideoLarge: React.FC<VideoLargeProps> = ({ video }) => {
  return (
    <div className={styles['video-large']}>
      {
        video.thumbnailPath && (
          <Image
            className={styles['video-large__thumbnail']}
            src={video.thumbnailPath}
            alt={video.name}
            layout="fill"
            priority            
          />
        )
      }

      <Duration duration={video.duration} position='bottom-right'/>

      <div className={styles['video-large__information']}>
        <Link href={`/videos/${video.id}`}>
          <a className={styles['video-large__information-name']}> 
            {video.name} 
          </a>
        </Link>

        {
          video.channel?.avatarPath && (
            <Channel.Avatar 
              channel={video.channel} 
              color='white' 
            /> 
          )
        }

        <div className={styles['video-large__information-channel-name']}> 
          {video.channel?.name || 'NO DATA'}  
        </div>

        <div className={styles['video-large__information-statistics']}>
          <Statistics views={video.views} createdAt={video.createdAt} color='white' />
        </div>
      </div>
    </div>
  )
}

export default VideoLarge