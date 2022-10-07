import { createSlice } from '@reduxjs/toolkit'

import { ChannelState } from './channel.interface'
import { login, logout, register } from './channel.actions'

import { Namespaces } from '../namespaces.enum'


const initialState: ChannelState = {
	channel: null,
	loadingStatus: 'idle'
}

export const { reducer } = createSlice({
	name: Namespaces.channelSlice,
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// * Register
			.addCase(register.pending, state => {
				state.loadingStatus = 'loading'
			})
			.addCase(register.fulfilled, (state, action) => {
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
			.addCase(logout.fulfilled, state => {
				state.loadingStatus = 'idle'
				state.channel = null
			})
			.addCase(logout.rejected, state => {
				state.loadingStatus = 'error'
			})
	}
})
