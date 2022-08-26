import React from "react"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import classNames from "classnames";
import { AiFillClockCircle } from "react-icons/ai"
import { AiFillLike } from "react-icons/ai";
import { DiDatabase } from "react-icons/di"

import { formatNumToShort } from "@/utils/format-num-to-short";

import { StatisticsProps } from "./Statistics.interface";
import styles from './Statistics.module.scss'
import Badge from "@/components/ui/Badge";


dayjs.extend(relativeTime)

const Statistics: React.FC<StatisticsProps> = ({ duration, likesValue, createdAt, direction }) => {
  return (
    <div 
      className={classNames(
        styles.statistics,
        { [styles[`statistics--${direction}`]]: Boolean(direction) }
      )}
    >
      <div className={styles.statistics_badge}>
        <Badge
          icon={AiFillClockCircle}
          label={`${duration} min`}
        />
      </div>

      <div className={styles.statistics_badge}>
        <Badge
          icon={AiFillLike}
          label={formatNumToShort(likesValue)}
        />
      </div>

      <div className={styles.statistics_badge}>
        <Badge
          icon={DiDatabase}
          label={dayjs(new Date(createdAt)).fromNow()}
        />
      </div>
    </div>
  )
}

export default Statistics