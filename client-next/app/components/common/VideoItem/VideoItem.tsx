import { IVideo } from "@/types"
import cn from "classnames"
import { useRouter } from "next/router"
import React from "react"
import { RiDeleteBin2Line } from "react-icons/ri"
import { BiEdit } from 'react-icons/bi'

import styles from './VideoItem.module.scss'
import Image from "next/image"
import VideoDuration from "./VideoDuration"
import Link from "next/link"
import VideoStatistics from "./VideoStatistics"
import ChannelAvatar from "../ChannelAvatar"

interface VideoItemProps {
  video: IVideo
  isSmall?: boolean,

  // ? Пропы для видео на странице студии
  studioPage?: {
  }
  // ? Показать кнопку обновления
  withUpdateLink?: boolean
  
  // ? Позволить удалить видео
  removeHandler?: (videoId: IVideo['id']) => void
}

const VideoItem: React.FC<VideoItemProps> = ({ video, isSmall, removeHandler, withUpdateLink }) => {
  const router = useRouter()

  return (
    <div 
      className={cn(
        styles['video-item'], 
        { [styles.small]: isSmall }
      )}
    >
      {!!removeHandler && (
        <button
          onClick={() => removeHandler(video.id)}
          className="absolute bottom-3 right-3 z-10"
        >
          <RiDeleteBin2Line className="text-lg text-red-400"/>
        </button>
      )}

      {withUpdateLink && (
        <button
          className="absolute bottom-3 right-11 z-10"
          onClick={() => router.push(`/videos/edit/${video.id}`)}
        >
          <BiEdit className="text-lg text-blue-500"/>
        </button>
      )}



      <div className={styles.thumbnail}>
        {video.thumbnailPath ?? (
          <Image
            src={video.thumbnailPath}
            alt={video.name}
            width={185}
            height={103}
            layout="responsive"
          />
        )}

        <VideoDuration duration={video.duration}/>

        {video?.channel?.avatarPath && (
          <div className="absolute right-3 -bottom-7">
            <ChannelAvatar channel={video.channel}/>
          </div>
        )}
      </div>


      <div className={styles.information}>
        {!isSmall && <div className={styles.author}>{video.channel.name}</div>}

        <Link href={`videos/${video.id}`}>
          <a className={styles.name}>
            {video.name}
          </a>
        </Link>

        <VideoStatistics 
          views={video.views} 
          createdAt={!isSmall ? video.createdAt : undefined} 
        />
      </div>
    </div>
  )
}

export default VideoItem