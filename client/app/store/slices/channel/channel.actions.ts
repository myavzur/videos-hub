import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import {
	AuthService,
	ILoginBody,
	IRegistrationBody,
	IAuthResponse,
} from '@/services/RandomTube/auth.service'

import { Namespaces } from '../namespaces.enum'
import { alertError } from 'utils/alert-error'


export const register = createAsyncThunk<IAuthResponse, IRegistrationBody>(
	`${Namespaces.channelSlice}/register`, 
	async (payload, thunkApi) => {
		try {
			return await AuthService.register(payload)
		} 
		catch (e) {
			alertError(e, 'Registration')
			return thunkApi.rejectWithValue(e)
		}
	}
)
	
export const login = createAsyncThunk<IAuthResponse, ILoginBody>(
	`${Namespaces.channelSlice}/login`, 
	async (payload, thunkApi) => {
		try {
			return await AuthService.login(payload)
		} 
		catch (e) {
			alertError(e, 'Login')
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk<null, void>(
	`${Namespaces.channelSlice}/logout`,
	async (payload, thunkApi) => {
		try {
			const response = await AuthService.logout()

			toastr.success('Logout', 'Logout. 👌')

			return response
		} 
		catch (e) {
			alertError(e, 'Logout')
			return thunkApi.rejectWithValue(e)
		}
	}
)
