import dynamic from "next/dynamic"
import React, { PropsWithChildren } from "react"

import { AuthProviderProps } from "./private-route"


/**
  * ! Должно работать только с клиентской частью Next поэтому используем dynamic. 
  * ? Потому что используем API для авторизации.
*/
const CheckAuthDynamic = dynamic(
  () => import('./CheckAuth'), 
  { 
    ssr: false
  }
)


/**
 * * Returns age if user authorized, overwise - redirects to home page
 */
const AuthProvider: React.FC< PropsWithChildren<AuthProviderProps> > = ({ 
  Component, 
  children
}) => {
  return Component.isPrivatePage 
      ? <CheckAuthDynamic Component={Component}> {children} </CheckAuthDynamic>
      : <React.Fragment> {children} </React.Fragment>
}

export default AuthProvider