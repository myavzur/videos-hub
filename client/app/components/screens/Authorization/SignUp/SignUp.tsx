import Field from "@/components/ui/Field"

import { useAuth, useStoreDispatch } from "@/hooks"
import { register as registerAction } from "@/store/slices/channel/channel.actions"
import { validateEmail } from "@/utils/validate-email"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FaEnvelope, FaLock } from "react-icons/fa"
import { IoMdPerson } from "react-icons/io"

import styles from '../SignIn/SignIn.module.scss'

interface FormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
}

const SignUp: React.FC = () => {
  const router = useRouter()
  const dispatch = useStoreDispatch()
  const auth = useAuth()
  const { 
    register, 
    handleSubmit, 
    formState: {
      isValid,
      errors,
      isSubmitted
    },
    setError,
    clearErrors,
    getValues
  } = useForm<FormValues>({ mode: 'onChange' })

  // * Redirect after register 🐬
  useEffect(() => {
    if (
      isSubmitted 
      && auth.channel?.id 
      && auth.loadingStatus !== 'loading'
    ) {
      router.push('/')
    }
  }, [isSubmitted, auth.channel, auth.loadingStatus, router])

  const handleSignUp: SubmitHandler<FormValues> = ({ email, password, passwordConfirmation, name }) => {    
    if (isValid) {
      dispatch(registerAction({ 
        email, 
        password, passwordConfirmation,
        name 
      }))
    }    
  }

  return (
    <form 
      className={styles.form} 
      onSubmit={handleSubmit(handleSignUp)}
    >
      <h1 className={styles.form__heading}>
        Create Your <span className={styles.form__heading_brand}>VideosHub!</span> Account
      </h1>

      <div className={styles.form__fields}>
        <div className={styles.form__field}>
          {errors.email?.message && <Field.Error text={errors.email.message}/>}
          
          <Field.Default
            {...register('email', {
              minLength: {
                value: 4,
                message: "Email can't be less than 4 symbols"
              },
              maxLength: {
                value: 60,
                message: "Email can't be larger than 60 symbols"
              },
              validate: (value) => validateEmail(value) || 'Invalid email address',
              required: 'Email is required'
            })}
            icon={FaEnvelope}
            placeholder="Enter your Email 📮"
            isError={Boolean(errors.email)}
            isDirty={Boolean(getValues('email'))}
          />
        </div>

        <div className={styles.form__field}>
          {errors.password?.message && <Field.Error text={errors.password.message}/>}

          <Field.Password
            {...register('password', {
              minLength: {
                value: 12,
                message: "Password can't be less than 12 symbols"
              },
              maxLength: {
                value: 45,
                message: "Password can't be larger than 45 symbols"
              },
              validate: {
                matchesPasswordConfirmation: (value) => {
                  const { passwordConfirmation } = getValues()
                  if (value != passwordConfirmation) {
                    setError('passwordConfirmation', {message: "Passwords don't match"})
                    return true;
                  }
                  clearErrors('passwordConfirmation')
                  return undefined
                }
              },
              required: 'Password is required'
            })}
            isError={Boolean(errors.password)}
            isDirty={Boolean(getValues('password'))}
          />
        </div>

        <div className={styles.form__field}>
          {errors.passwordConfirmation?.message && <Field.Error text={errors.passwordConfirmation.message}/>}

          <Field.Password
            {...register('passwordConfirmation', {
              validate: {
                matchesPassword: (value) => {
                  const { password } = getValues()
                  return (value === password) || "Passwords don't match"
                }
              },
              required: 'Please repeat your password',
            })}
            placeholder="Repeat your password 🔁"
            isError={Boolean(errors.passwordConfirmation) || Boolean(errors.password)}
            isDirty={Boolean(getValues('passwordConfirmation') || Boolean(getValues('password')))}
          />
        </div>

        <div className={styles.form__field}>
          {errors.name?.message && <Field.Error text={errors.name.message}/>}

          <Field.Default
            {...register('name', {
              minLength: {
                value: 3,
                message: "Display name can't be less than 3 symbols"
              },
              maxLength: {
                value: 35,
                message: "Display name can't be larger than 35 symbols"
              },
              required: 'Display name is required'
            })}
            icon={IoMdPerson}
            placeholder="Enter your Display Name 🎴"
            autoComplete="new-off"
            isError={Boolean(errors.name)}
            isDirty={Boolean(getValues('name'))}
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
        {auth.loadingStatus === 'loading' ? 'Loading...' : 'Sign Up'}
      </button>

      <p className={styles.form__transfer}>
        {"Don't have an account? "}
        <Link href="/authorization/sign-in">
          <a className={styles.form__transfer_link}>Sign In</a>
        </Link>
      </p>
    </form>
  )
}

export default SignUp