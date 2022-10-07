import { useRouter } from "next/router"
import React, { PropsWithChildren } from "react"

import { useAuth } from "@/hooks"
import { ClientEndpoints } from "@/routes/endpoints.enum"
import { AuthProviderProps } from "./private-route.interface"

const CheckAuth: React.FC< PropsWithChildren<AuthProviderProps> > = ({ Component, children }) => {
  const router  = useRouter()
  const auth = useAuth()


  if (auth.loadingStatus === 'loading') {
    return null
  } 

  // ? Return requested page if authorized
  if (auth.channel) {
    return (
      <React.Fragment> 
        {children} 
      </React.Fragment> 
    )
  }

  // ? Redirect if NOT authorized
  if (Component.isPrivatePage) {
    if (router.pathname !== ClientEndpoints.HOME) {
      router.replace(ClientEndpoints.HOME)
    }
  }
  

  return null
}

export default CheckAuth