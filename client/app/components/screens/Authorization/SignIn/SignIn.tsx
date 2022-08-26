import Field from "@/components/ui/Field"

import { useAuth, useStoreDispatch } from "@/hooks"
import { login } from "@/store/slices/channel/channel.actions"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FaEnvelope } from "react-icons/fa"

import styles from './SignIn.module.scss'

interface FormValues {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const router = useRouter()
  const dispatch = useStoreDispatch()
  const auth = useAuth()
  const { 
    register, 
    handleSubmit, 
    formState: {
      errors, 
      isSubmitted
    }
  } = useForm<FormValues>({
    mode: 'onChange'
  })

  // * Redirect after login 🐬
  useEffect(() => {
    if (
      isSubmitted 
      && auth.channel?.id 
      && auth.loadingStatus !== 'loading'
    ) {
      router.push('/')
    }
  }, [isSubmitted, auth.channel, auth.loadingStatus, router])

  const handleSignIn: SubmitHandler<FormValues> = (data) => {
    dispatch(login(data))
  }

  return (
    <form 
      className={styles.form} 
      onSubmit={handleSubmit(handleSignIn)}
    >
      <h1 className={styles.form__heading}>
        Login To <span className={styles.form__heading_brand}>VideosHub!</span>
      </h1>

      <div className={styles.form__fields}>
        <div className={styles.form__field}>
          {errors.email?.message && <Field.Error text={errors.email.message}/>}

          <Field.Default
            {...register('email', {
              minLength: 4,
              maxLength: 60,
              required: 'Email is required'
            })}
            icon={FaEnvelope}
            placeholder="Enter your Email 📮"
            autoComplete="new-off"
            type="email"
            isError={Boolean(errors.email)}
          />
        </div>

        <div className={styles.form__field}>
          {errors.password?.message && <Field.Error text={errors.password.message}/>}

          <Field.Password
            {...register('password', {
              minLength: 12,
              maxLength: 60,
              required: 'Password is required'
            })}
            isError={Boolean(errors.password)}
          />
        </div>
      </div>

      <Link href={'/authorization/reset-password'}>
        <a className={styles.form__forgot_link}>Forgot your Password?</a>
      </Link>

      <button
        className={styles.form__button}
        type="submit"
        disabled={auth.loadingStatus === 'loading'}
      >
        {auth.loadingStatus === 'loading' ? 'Loading...' : 'Sign In'}
      </button>

      <p className={styles.form__transfer}>
        {"Don't have an account? "}
        <Link href="/authorization/sign-up">
          <a className={styles.form__transfer_link}>Sign Up</a>
        </Link>
      </p>
    </form>
  )
}

export default SignIn