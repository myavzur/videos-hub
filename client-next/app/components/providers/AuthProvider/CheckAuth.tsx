import { useRouter } from "next/router"
import React, { PropsWithChildren } from "react"

import { useStoreSelector } from "@/hooks"
import { ClientEndpoints } from "@/routes/endpoints.enum"
import { AuthProviderProps } from "./private-route.interface"

const CheckAuth: React.FC< PropsWithChildren<AuthProviderProps> > = ({
  Component,
  children
}) => {
  const router       = useRouter()
  const channelState = useStoreSelector(state => state.channel)


  if (channelState.loadingStatus === 'loading') return null 

  // ? Return requested page if authorized
  if (channelState.channel) return <React.Fragment> {children} </React.Fragment> 

  // ? Redirect if NOT authorized
  if (Component.isPrivatePage) {
    if (router.pathname !== ClientEndpoints.HOME) {
      router.replace(ClientEndpoints.HOME)
    }
  }
  

  return null
}

export default CheckAuth