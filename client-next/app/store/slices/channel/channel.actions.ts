import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import {
	AuthService,
	IAuthenticationBody,
	IAuthenticationResponse
} from '@/services/RandomTube/auth.service'

import { Namespaces } from '../namespaces.enum'

export const register = createAsyncThunk<
	IAuthenticationResponse,
	IAuthenticationBody
>(`${Namespaces.channelSlice}/registrating🆕`, async (payload, thunkApi) => {
	try {
		const response = await AuthService.authenticate({
			type: 'register',
			payload
		})

		toastr.success('Registration', 'Successfuly registrated. 👌')

		return response
	} catch (e) {
		console.log(e)
		return thunkApi.rejectWithValue(e)
	}
})

export const login = createAsyncThunk<
	IAuthenticationResponse,
	IAuthenticationBody
>(`${Namespaces.channelSlice}/logginizing🔑`, async (payload, thunkApi) => {
	try {
		const response = await AuthService.authenticate({ type: 'login', payload })

		toastr.success('Login', 'Successfuly login. 🤾')

		return response
	} catch (e) {
		console.log(e)
		return thunkApi.rejectWithValue(e)
	}
})

export const logout = createAsyncThunk<null, null>(
	`${Namespaces.channelSlice}/logouting🖐`,
	async (payload, thunkApi) => {
		try {
			const response = await AuthService.logout()

			toastr.success('Logout', 'Successfuly registrated. 👌')

			return response
		} catch (e) {
			console.log(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)
