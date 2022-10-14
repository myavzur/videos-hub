import Image from "next/image"
import Link from "next/link"
import React from "react"

import ChannelName from "@/components/ui/Channel/Name"
import Heading from "@/components/ui/Heading"

import { VideoRandomProps } from './VideoRandom.interface'
import styles from './VideoRandom.module.scss'

const VideoRandom: React.FC<VideoRandomProps> = ({ video }) => {
  return (
    <div className={styles.video}>
      <Image
        className={styles['thumbnail']}
        src={video?.thumbnailPath || '/assets/auth-bg.png'}
        alt={video.name}
        layout="fill"
        priority
      />


      <div className={styles['information']}>
        <div>
          <Link href={`/videos/${video.id}`} >
            <a className={styles['information__name']}> 
              <h1>
                {video.name}
              </h1>
            </a>
          </Link>

          <p className={styles['information__description']}> 
            {video.description} 
          </p>
        </div>

        <span>
          <legend className={styles['information__author-legend']}>
            Video by
          </legend>

          <div className={styles['information__author-name']}>
            <ChannelName channel={video.channel}/>
          </div>
        </span>
      </div>
    </div>
  )
}

export default VideoRandom