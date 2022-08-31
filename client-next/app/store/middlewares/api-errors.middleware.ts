import { isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { alertError } from "utils/alert-error";

export const apiErrorsMiddleware: Middleware = (
  api: MiddlewareAPI
) => next => action => {
  if (isRejectedWithValue(action)) {
    alertError(action.error, 'Error occuried')
  }

  return next(action)
}