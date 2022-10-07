import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import {
	AuthService,
	IAuthenticationBody,
	IAuthenticationResponse
} from '@/services/RandomTube/auth.service'

import { Namespaces } from '../namespaces.enum'
import { alertError } from 'utils/alert-error'


export const register = createAsyncThunk<IAuthenticationResponse, IAuthenticationBody>(
	`${Namespaces.channelSlice}/register`, 
	async (payload, thunkApi) => {
		try {
			return await AuthService.authenticate({ type: 'register', payload })

		} catch (e) {
			alertError(e, 'Registration')
			return thunkApi.rejectWithValue(e)
		}
	}
)
	
export const login = createAsyncThunk<IAuthenticationResponse, IAuthenticationBody>(
	`${Namespaces.channelSlice}/loging`, 
	async (payload, thunkApi) => {
		try {
			return await AuthService.authenticate({ type: 'login', payload })
		} catch (e) {
			alertError(e, 'Login')
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk<null, null>(
	`${Namespaces.channelSlice}/logout`,
	async (payload, thunkApi) => {
		try {
			const response = await AuthService.logout()

			toastr.success('Logout', 'Successfuly registrated. 👌')

			return response
		} catch (e) {
			alertError(e, 'Logout')
			return thunkApi.rejectWithValue(e)
		}
	}
)
