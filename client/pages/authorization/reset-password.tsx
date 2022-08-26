import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Authorization from "@/components/screens/Authorization"

// interface LoginValues  {
//   name: string,
//   email:  string
//   password: string
// }

const ResetPassword: NextPageAuth = () => {
  return (
    <Authorization.Layout
      meta={{
        title: "Oops, You forgot your Password!",
        description: "Reset your password, be free"
      }}
    >
      RESET PASSWORD LOL BRUHH MOMENTO
    </Authorization.Layout>
  )
}

export default ResetPassword
// const router = useRouter()
// const dispatch = useStoreDispatch()
// const { register, handleSubmit} = useForm<LoginValues>({
//   mode: 'onChange'
// })

// const handleRegister: SubmitHandler<LoginValues> = (data) => {
//   dispatch(login(data))
//     .then(() => router.push('/'))
//     .catch(e => alert(e))
// }

// return (
//   <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col mx-auto w-52">
//     <input className="bg-primary-500 mb-2" type="text" {...register('email')} />
//     <input className="bg-primary-500" type="text" {...register('password')} />
//     <button type="submit">Cmon</button>
//   </form>
// )