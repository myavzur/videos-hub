import React from "react"

import Channel from "@/components/ui/Channel"

import { CommentProps } from './Comment.interface'
import styles from '../Comments.module.scss'


const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className={styles.comments__comment}>
      <Channel.Info channel={comment.channel} message={comment.content} />
    </div>
  )
}

export default Comment