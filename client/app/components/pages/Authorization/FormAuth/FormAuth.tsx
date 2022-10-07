import React, { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import classNames from "classnames"

import { useAuth, useStoreDispatch } from "@/hooks"
import Field from "@/components/ui/Field"
import { register as registerAction } from "@/store/slices/channel/channel.actions"

import { authFields } from "./FormAuth.data"
import { FormAuthProps, FormAuthFields } from './FormAuth.interface'
import styles from './FormAuth.module.scss'
import { useRouter } from "next/router"


const FormAuth: React.FC<FormAuthProps> = ({  }) => {
  const auth     = useAuth()
  const dispatch = useStoreDispatch()
  const router = useRouter()
  const { register, handleSubmit, reset, formState } = useForm<FormAuthFields>({ mode: 'onChange' })

  const handleLogin: SubmitHandler<FormAuthFields> = async data => {
    dispatch(registerAction(data))
      .unwrap()
      .then(() => router.push('/'))
      .catch((e) => console.log(e))
  }

  return (
    <div className="form-wrapper">
      <form 
        className={styles.form} 
        onSubmit={handleSubmit(handleLogin)}
      >
        {authFields.map( ({field, ...inputAttributes}) => {
          return (
            <div 
              className={styles.form__field}
              key={field.name}
            >
              <Field 
                {...register(field.name)} 
                {...inputAttributes}

                field={field}
              />
            </div>
          )
        })}

        <button 
          className={styles.form__submit}
          type="submit" 
          disabled={auth.loadingStatus === 'loading'}
        >
          {auth.loadingStatus === 'loading' ? 'Wait a minute...' : 'Continue with Email '}
        </button>
      </form>
      
    </div>
  )
}

export default FormAuth