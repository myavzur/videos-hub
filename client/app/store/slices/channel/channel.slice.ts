import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ChannelState } from './channel.interface'
import { login, logout, register } from './channel.actions'

import { Namespaces } from '../namespaces.enum'
import { IChannel } from '@/types/entities'


const initialState: ChannelState = {
	channel: null,
	loadingStatus: 'idle'
}

const channelSlice = createSlice({
	name: Namespaces.channelSlice,
	initialState,
	reducers: {
		/**
		 * ! DONT USE IT IF YOU NOT SURE WHAT ARE YOU DOING
		 * * Uses inside api-errors middleware to clear state.channel if it's not authorized
		 */
		clearChannel : (state) => {
			state.channel = null
			state.loadingStatus = 'idle'
		}
	},
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

export const { reducer } = channelSlice

export const { clearChannel  } = channelSlice.actions