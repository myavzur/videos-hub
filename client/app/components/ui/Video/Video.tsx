// @ts-nocheck

import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin2Line } from "react-icons/ri"

import Channel from '@/components/ui/Channel'
import Statistics from "./Statistics"

import { VideoProps } from "./Video.interface"
import styles from './Video.module.scss'

const Video: React.FC<VideoProps> = ({ video, studioProps, ...restProps }) => {
  const router = useRouter()

  return (
    <div className={styles.video} {...restProps}>
      {
        !!studioProps?.removeHandler && (
          <button
            onClick={() => studioProps.removeHandler(video.id)}
            className="absolute bottom-3 right-3 z-10"
          >
            <RiDeleteBin2Line className="text-lg text-secondary"/>
          </button>
        )
      }

      {
        studioProps?.withUpdateLink && (
          <button
            onClick={() => router.push(`/videos/edit/${video.id}`)}
            className="absolute bottom-3 right-11 z-10"
          >
            <BiEdit className="text-lg text-brand-primary"/>
          </button>
        )
      }



      <div className={styles.thumbnail}>
        <div className={styles.thumbnail__image}>
          <Image
            src={video.thumbnailPath}
            alt={video.name}
            layout="fill"
          />
        </div>

        <div className={styles.thumbnail__overlay}>
          <div className={styles.thumbnail__overlay_avatar}>
            <Channel.Avatar channel={video.channel} />
          </div>

          <div className={styles.thumbnail__overlay_statistics}>
            <Statistics
              createdAt={video.createdAt}
              duration={video.duration}
              likesValue={video.likesValue}
            />
          </div>
        </div>
      </div>


      <div className={styles.information}>
        <div className={styles.information__channel_name}>
          <Channel.Name channel={video.channel} />
        </div>

        <Link href={`/videos/${video.id}`}>
          <a className={styles.information__name}> 
            {video.name} 
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Video