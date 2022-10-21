import React from "react"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import cn from "classnames";
import { IoIosTimer } from "react-icons/io"
import { AiOutlineLike } from "react-icons/ai";
import { DiDatabase } from "react-icons/di"

import { formatNumToShort } from "@/utils/format-num-to-short";

import { StatisticsProps } from "./Statistics.interface";
import styles from './Statistics.module.scss'
import Badge from "@/components/ui/Badge";


dayjs.extend(relativeTime)

const Statistics: React.FC<StatisticsProps> = ({ duration, likes, createdAt, direction }) => {
  return (
    <div 
      className={cn(
        styles.statistics,
        { [styles[`statistics--${direction}`]]: Boolean(direction) }
      )}
    >
      <div className={styles.statistics_badge}>
        <Badge
          icon={IoIosTimer}
          label={`${duration} min`}
        />
      </div>

      <div className={styles.statistics_badge}>
        <Badge
          icon={AiOutlineLike}
          label={formatNumToShort(likes)}
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