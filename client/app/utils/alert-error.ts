import { toastr } from 'react-redux-toastr'


export const alertError = (error: any, title = 'Error on request.') => {
  const message = getErrorMessage(error)
	toastr.error(title, message)
	throw message
}

const getErrorMessage = (error: any) => {
  if (error?.response?.data?.message) {
    const message = error.response.data.message 

    console.log(`%calert-error.ts ~ line 14 ~ getErrorMessage ~ message: ${message}`, "color: hotpink")

    return ((typeof(message) !== 'string') && message.length) ? message[0] : message
  }

  if (error?.message) return error.message

  console.log(`%calert-error.ts ~ line 21 ~ getErrorMessage ~ unhandled error: ${error}`, "color: red")

  throw new Error(`Unhandled error, ${error} | helpers/alert-error.ts`)
}
