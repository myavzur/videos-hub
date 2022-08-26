import Channel from "@/components/ui/Channel"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

import { VideoLargeProps } from './VideoLarge.interface'
import styles from './VideoLarge.module.scss'

import Statistics from "../Statistics";
import classNames from "classnames";


dayjs.extend(relativeTime)


const VideoLarge: React.FC<VideoLargeProps> = ({ video, orientation }) => {
  return (
    <div 
      className={classNames(
        styles.video,
        { [styles[`video--${orientation}`]]: Boolean(orientation) }
      )}
    >
      {video.thumbnailPath && (
        <Image
          className={styles.thumbnail}
          src={video.thumbnailPath}
          alt={video.name}
          layout="fill"
          priority            
        />
      )}


      <main className={styles.information}>
        <div className={styles.information__general}>
          <div className={styles.information__general_statistics}>
            <Statistics 
              duration={video.duration}
              likesValue={video.likesValue}
              createdAt={video.createdAt}
            />
          </div>

          <Link href={`/videos/${video.id}`}>
            <a className={styles.information__general_name}>
              {video.name}
            </a>
          </Link>

          <p className={styles.information__general_description}>
            {video.description}
          </p>
        </div>


        <div className={styles.information__author}>
          <legend className={styles.information__author_present}>
            Video by
          </legend>

          <div className={styles.information__author_name}>
            <Channel.Name 
              channel={video.channel}
              withIcon
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default VideoLarge