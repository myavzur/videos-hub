import { isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { alertError } from "utils/alert-error";

import { clearChannel } from "../slices/channel/channel.slice";

export const apiErrorsMiddleware: Middleware = (
  api: MiddlewareAPI
) => next => action => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 403) {
      console.log(`%capi-erros-middleware.ts ~ line 11 ~ User not Authorized... clearing state.channel... :`, "color: skyblue")
      
      api.dispatch(clearChannel())
    }
    
    console.group(`%capi-erros-middleware.ts ~ line 17 ~ api-error:`, "color: hotpink")
      console.log(action)
    console.groupEnd()
    
    alertError(action.error, 'Error occuried')
  }

  return next(action)
}