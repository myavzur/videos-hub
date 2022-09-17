import { IChannel } from '@/types/entities'

import { _axios } from '@/services/RandomTube/_axios'

export const AuthService = {
	async authenticate(params: AuthenticationParams) {
		const { type, payload } = params

		const res = await _axios.post<IAuthenticationResponse>(
			`auth/${type}`,
			payload
		)

		return res.data
	},

	async logout() {
		const res = await _axios.get(`auth/logout`)

		return res.data
	}
}

export type IAuthenticationBody 		= Pick<IChannel, 'email' | 'password'>
export type IAuthenticationResponse = Omit<IChannel, 'password' | 'videos' | 'subscriptions'>
interface AuthenticationParams {
	type: 'login' | 'register'
	payload: IAuthenticationBody
}
