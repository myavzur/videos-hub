import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Authorization from "@/components/screens/Authorization"

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