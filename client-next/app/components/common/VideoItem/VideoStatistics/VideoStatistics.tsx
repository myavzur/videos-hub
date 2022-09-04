import React from "react"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

import { formatNumToShort } from "utils/format-num-to-short";

import styles from '../VideoItem.module.scss'

dayjs.extend(relativeTime)

interface VideoStatisticsProps {
  views: number;
  createdAt?: string;
}

const VideoStatistics: React.FC<VideoStatisticsProps> = ({ views, createdAt }) => {
  return (
    <div className={styles.statistics}>
      <div>{formatNumToShort(views)} views</div>

      {createdAt && (
        <React.Fragment>
          <div>*</div>
          <div>{dayjs(new Date(createdAt)).fromNow()}</div>
        </React.Fragment>
      )}
    </div>
  )
}

export default VideoStatistics