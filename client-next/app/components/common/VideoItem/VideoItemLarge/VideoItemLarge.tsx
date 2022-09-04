import { IVideo } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ChannelAvatar from "../../ChannelAvatar"
import VideoDuration from "../VideoDuration"
import VideoStatistics from "../VideoStatistics"

import styles from './VideoItemLarge.module.scss'


interface VideoItemLargeProps {
  video: IVideo  
}

const VideoItemLarge: React.FC<VideoItemLargeProps> = ({ video }) => {
  return (
    <div className={styles['video-item-large']}>
      <div className={styles.thumbnail}>
        {video.thumbnailPath && (
          <Image
            className={styles['background-image']}
            src={video.thumbnailPath}
            alt={video.name}
            layout="fill"
            priority            
          />
        )}

        <VideoDuration duration={video.duration} position='bottom-right'/>

        <div className={styles.information}>
          <Link href={`/videos/${video.id}`}>
            <a className={styles.name}> {video.name} </a>
          </Link>

          {
            video.channel.avatarPath && <ChannelAvatar channel={video.channel} isWhite /> 
          }

          <div className={styles.author}> {video.channel.name} </div>

          <VideoStatistics views={video.views} createdAt={video.createdAt} />
        </div>
      </div>
    </div>
  )
}

export default VideoItemLarge