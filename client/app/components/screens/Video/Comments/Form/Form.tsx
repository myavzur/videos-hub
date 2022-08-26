import React from "react"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form/dist/types"

import { ICreateCommentBody } from "@/types/entities/comment.interface"
import { commentApi } from "@/store/slices/api/comments.api"

import { FormProps } from './Form.interface'
import styles from './Form.module.scss'
import { IoMdSend } from "react-icons/io"
import Field from "@/components/ui/Field"


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
      <div className={styles.form__field}>
        <Field.Default
          {...register('content', {
            required: 'Content is required!'
          })} 
          placeholder="This video is awful! ✨"
        />

        <button
          className={styles.form__field_icon}
          disabled={status.isLoading}
        >
          {status.isLoading ? "X" : <IoMdSend/>}
        </button>
      </div>
    </form>
  )
}

export default Form