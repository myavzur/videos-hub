import { useAuth, useStoreSelector } from "@/hooks"
import React from "react"

import Comment from "./Comment"

import { CommentsProps } from './Comments.interface'
import styles from './Comments.module.scss'
import Form from "./Form"

const Comments: React.FC<CommentsProps> = ({ comments, videoId }) => {
  const { channel } = useAuth()
  
  return (
    <div className={styles.comments}>
      <h2>Comments</h2>

      <div className={styles['comments__line']} />

      {comments.length ? (
          <div>
            {comments.map(comment => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </div>
        ) : (
          <p>Write first comment!</p>
        )}

      <div className={styles['comments__form']}>
        {channel && <Form videoId={videoId}/>}
      </div>
    </div>
  )
}

export default Comments