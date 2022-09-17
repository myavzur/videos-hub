// @ts-nocheck

import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin2Line } from "react-icons/ri"
import cn from "classnames"

import { IVideo } from "@/types/entities"

import Duration from "./Duration"
import Statistics from "./Statistics"
import ChannelAvatar from "../ChannelAvatar"

import styles from './Video.module.scss'


interface VideoItemProps {
  video: IVideo
  isSmall?: boolean,

  // ? Пропы для видео на странице студии
  studioProps?: {
    withUpdateLink?: boolean
    removeHandler?: (videoId: IVideo['id']) => void
  }
}

const Video: React.FC<VideoItemProps> = ({ video, isSmall, studioProps }) => {
  const router = useRouter()

  return (
    <div 
      className={cn(
        styles['video'], 
        { [styles['video_small']]: isSmall }
      )}
    >
      {
        !!studioProps?.removeHandler && (
          <button
            onClick={() => studioProps.removeHandler(video.id)}
            className="absolute bottom-3 right-3 z-10"
          >
            <RiDeleteBin2Line className="text-lg text-red-400"/>
          </button>
        )
      }

      {
        studioProps?.withUpdateLink && (
          <button
            className="absolute bottom-3 right-11 z-10"
            onClick={() => router.push(`/videos/edit/${video.id}`)}
          >
            <BiEdit className="text-lg text-blue-500"/>
          </button>
        )
      }



      <div className={styles['video__thumbnail']}>
        <Image
          src={video.thumbnailPath}
          alt={video.name}
          width={185}
          height={103}
          layout="responsive"
          priority
        />

        <Duration duration={video.duration}/>

        <div className={styles['video__channel-avatar']}>
          {video?.channel?.avatarPath &&  (
            <ChannelAvatar channel={video.channel} color='white' />
          )}
        </div>
      </div>


      <div className={styles['video__information']}>
        {
          !isSmall && (
            <div className={styles['video__information-channel-name']}>
              {video.channel?.name}
            </div>
          )
        }

        <Link href={`videos/${video.id}`}>
          <a className={styles['video__information-name']}> {video.name} </a>
        </Link>

        <Statistics 
          views={video.views} 
          createdAt={!isSmall ? video.createdAt : undefined} 
        />
      </div>
    </div>
  )
}

export default Video