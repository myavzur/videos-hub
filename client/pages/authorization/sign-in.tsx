import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Authorization from "@/components/screens/Authorization"
import { BRAND_NAME } from "@/constants/brand.constants"

const SignIn: NextPageAuth = () => {
  return (
    <Authorization.Layout
      meta={{
        title: `${BRAND_NAME} | Login via your favorite platform!`,
        description: "Glad to see you again with us! Every day is new horizons."
      }}
    >
      <Authorization.SignIn/>
    </Authorization.Layout>
  )
}

export default SignIn