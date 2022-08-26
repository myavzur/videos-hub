import Channel from "@/components/ui/Channel"
import { useAuth } from "@/hooks"
import { api } from "@/store/slices/api/api.slice"
import React, { useEffect, useRef } from "react"

import { CommentsProps } from './Comments.interface'
import styles from './Comments.module.scss'
import Form from "./Form"

const Comments: React.FC<CommentsProps> = ({ comments, videoId }) => {
  const { channel } = useAuth()
  const { data } = api.useGetMyChannelQuery(null, { skip: !channel })
  
  const commentsWindowRef = useRef<HTMLDivElement | null>(null)

  // * Scroll comments to bottom on initialize and on new comment 
  useEffect(() => {
    if (commentsWindowRef.current) {
      commentsWindowRef.current.scrollTo({
        top: commentsWindowRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [comments])
  
  return (
    <div className={styles.comments}>
      <h2 className={styles.comments__heading}>Comments 👾</h2>

      <div className={styles.comments__line} />

      <div className={styles.comments__list} ref={commentsWindowRef}>
        {comments.length 
          ? (
            comments.map(comment => (
              <div 
                className={styles.comments__list_comment}
                key={comment.id}
              >
                <Channel.Info 
                  channel={comment.channel} 
                  message={comment.content} 
                />
              </div>
            ))
          ) 
          : (
            <p>Write first comment!</p>
          )
        } 
      </div>

      {(channel && data) && (
        <div className={styles.comments__form}>
          <Form videoId={videoId}/>
        </div>
      )}
    </div>
  )
}

export default Comments