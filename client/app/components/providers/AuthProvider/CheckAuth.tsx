import { useRouter } from "next/router"
import React, { PropsWithChildren } from "react"

import { api } from '@/store/slices/api/api.slice'
import { useAuth } from "@/hooks"
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
    router.replace('/')
  }
  

  return null
}

export default CheckAuth