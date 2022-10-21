import React from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form/dist/types"

import { ICreateCommentBody } from "@/types/entities/comment.interface"
import { commentApi } from "@/store/slices/api/comments.api"

import { FormProps } from './Form.interface'
import styles from './Form.module.scss'
import { IoMdSend } from "react-icons/io"


const Form: React.FC<FormProps> = ({ videoId }) => {
  const { register, handleSubmit, reset } = useForm<ICreateCommentBody>({ mode: 'onChange' })

  const [ createComment, status ] = commentApi.useCreateCommentMutation()

  const handleCreateComment: SubmitHandler<ICreateCommentBody> = async data => {
    createComment({...data, videoId })
      .unwrap()
      .then(() => reset())
  }

  return (
    <form 
      className={styles.form}
      onSubmit={handleSubmit(handleCreateComment)}
    >
      <div className={'relative'}>
        <input 
          {...register('content', {
            required: 'Content is required!'
          })} 
          placeholder="This video is beautiful! ✨"
        />

        <button
          className={'text-xl absolute ring-2 top-1.5 text-purple'}
          disabled={status.isLoading}
        >
          <IoMdSend/>
        </button>
      </div>
    </form>
  )
}

export default Form