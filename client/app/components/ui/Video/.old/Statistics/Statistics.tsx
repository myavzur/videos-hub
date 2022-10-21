import React from "react"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import cn from "classnames";

import { formatNumToShort } from "@/utils/format-num-to-short";

import { StatisticsProps } from "./Statistics.interface";
import styles from './Statistics.module.scss'


dayjs.extend(relativeTime)

const Statistics: React.FC<StatisticsProps> = ({ views, createdAt, color }) => {
  return (
    <div 
      className={cn(
        styles.statistics,
        { [styles[`statistics_${color}`]]: !!color }
      )}
    >
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