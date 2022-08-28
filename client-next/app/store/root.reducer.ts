import { combineReducers } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'

import { reducer as channelReducer } from './slices/channel/channel.slice'

export const rootReducer = combineReducers({
	channel: channelReducer,
	toaster: toastrReducer
})
