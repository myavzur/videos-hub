import { combineReducers } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as channelReducer } from './slices/channel/channel.slice'
import { api } from './slices/api/api.slice'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	channel: channelReducer,
	toastr: toastrReducer
})
