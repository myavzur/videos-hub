import React from "react"

import { CommentProps } from './Comment.interface'
import styles from '../Comments.module.scss'
import ChannelInfo from "@/components/ui/ChannelInfo"


const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className={styles['comments__comment']}>
      <ChannelInfo channel={comment.channel} message={comment.content} />
    </div>
  )
}

export default Comment