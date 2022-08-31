import { useStoreSelector } from "@/hooks"
import { useRouter } from "next/router"
import React from "react"
import { PropsWithChildren } from "react"

import { AuthProviderProps } from "./private-route"
import { Endpoints } from "../../../../pages/endpoints.enum"

const CheckAuth: React.FC< PropsWithChildren<AuthProviderProps> > = ({
  Component,
  children
}) => {
  const router       = useRouter()
  const channelState = useStoreSelector(state => state.channel)


  if (channelState.loadingStatus === 'loading') return null 

  // ? Return page if authorized
  if (channelState.channel) return <React.Fragment> {children} </React.Fragment> 

  // ? Redirect if NOT authorized
  if (Component.isPrivatePage) {
    if (router.pathname !== Endpoints.HOME) {
      router.replace(Endpoints.HOME)
    }
  }
  

  return null
}

export default CheckAuth