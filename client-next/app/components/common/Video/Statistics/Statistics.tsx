import React from "react"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

import { formatNumToShort } from "utils/format-num-to-short";

import styles from './Statistics.module.scss'

dayjs.extend(relativeTime)

interface VideoStatisticsProps {
  views: number;
  createdAt?: string;
}

const Statistics: React.FC<VideoStatisticsProps> = ({ views, createdAt }) => {
  return (
    <div className={styles.statistics}>
      <div className={styles['statistics__stat']}>{formatNumToShort(views)} views</div>

      {
        createdAt && (
          <div className={styles['statistics__stat']}> {dayjs(new Date(createdAt)).fromNow()}</div>
        )
      }
    </div>
  )
}

export default Statistics