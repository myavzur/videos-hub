import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IAuthenticationResponse } from '@/services/RandomTube/auth.service'

import { Namespaces } from '@/store/slices/namespaces.enum'

import { login, logout, register } from './channel.actions'

// Types
interface ChannelSliceState {
	channel: IAuthenticationResponse | null
	loadingStatus: 'idle' | 'loading' | 'error'
}

// Slice
const initialState: ChannelSliceState = {
	channel: null,
	loadingStatus: 'idle'
}

export const { reducer } = createSlice({
	name: Namespaces.channelSlice,
	initialState,
	reducers: {
		// setTape: (state, action: PayloadAction<ITape>) => {
		//   state.current = action.payload
		// }
	},
	// ? Imported from different files, mean they are extra reducers (aside)
	extraReducers: builder => {
		builder
			// * Register
			.addCase(register.pending, state => {
				state.loadingStatus = 'loading'
			})
			.addCase(register.fulfilled, (state, action) => {
				console.log(action)
				state.loadingStatus = 'idle'
				state.channel = action.payload
			})
			.addCase(register.rejected, state => {
				state.loadingStatus = 'error'
			})

			// * Login
			.addCase(login.pending, state => {
				state.loadingStatus = 'loading'
			})
			.addCase(login.fulfilled, (state, action) => {
				console.log(action)
				state.loadingStatus = 'idle'
				state.channel = action.payload
			})
			.addCase(login.rejected, state => {
				state.loadingStatus = 'error'
			})

			// * Logout
			.addCase(logout.pending, state => {
				state.loadingStatus = 'loading'
			})
			.addCase(logout.fulfilled, (state, action) => {
				console.log(action)
				state.loadingStatus = 'idle'
				state.channel = action.payload
			})
			.addCase(logout.rejected, state => {
				state.loadingStatus = 'error'
				state.channel = null
			})
	}
})
