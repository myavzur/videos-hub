import dayjs from "dayjs"
import React from "react"
import { HiCalendar } from "react-icons/hi"
import { IoMdEye } from "react-icons/io"
import { RiHeart2Fill } from "react-icons/ri"

import ButtonSubscribe from "@/components/ui/ButtonSubscribe"
import Channel from "@/components/ui/Channel"

import { videoApi } from "@/store/slices/api/videos.api"

import { formatNumToShort } from "@/utils/format-num-to-short"

import { DetailsProps } from './Details.interface'
import styles from './Details.module.scss'


const Details: React.FC<DetailsProps> = ({ video }) => {
  const [ updateLikes, updateLikesStatus ] = videoApi.useUpdateLikesMutation()

  const handleUpdateLikes = () => {
    updateLikes(video.id)
  }

  return (
    <div className={styles.details}>
      <div>
        <Channel.Info channel={video.channel} />

        <h1> {video.name} </h1>

        <article className={styles['details__description']}> {video.description} </article>
      </div>

      <div className={'pt-2'}>
        <div className={styles['details__buttons']}>
          {video.channel?.id && (
            <ButtonSubscribe toChannelId={video.channel.id} />
          )}

          <button
            className={styles['likeButton']}
            disabled={updateLikesStatus.isLoading}
            onClick={handleUpdateLikes}
          >
            <RiHeart2Fill/>
            Like
          </button>
        </div>

        <div className={styles['number_info']}>
          <div>
            <IoMdEye/>
            <span> {formatNumToShort(video.views)} views</span>
          </div>

          <div>
            <RiHeart2Fill/>
            <span> {formatNumToShort(video.likes)} likes</span>
          </div>

          <div>
            <HiCalendar/>
            <span> {dayjs(new Date(video.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details