// @ts-nocheck

import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin2Line } from "react-icons/ri"
import cn from "classnames"

import Channel from '@/components/ui/Channel'
import Duration from "./.old/Duration"
import Statistics from "./.old/Statistics"

import { VideoProps } from "./Video.interface"
import styles from './Video.module.scss'

const Video: React.FC<VideoProps> = ({ video, isSmall, studioProps }) => {
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
            <Channel.Avatar channel={video.channel} color='white' />
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

        <Link href={`/videos/${video.id}`}>
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