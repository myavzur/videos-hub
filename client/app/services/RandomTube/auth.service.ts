import { IChannel } from '@/types/entities'

import { _axios } from '@/services/RandomTube/_axios'

export type ILoginBody = Pick<Required<IChannel>, 'email' | 'password'>
export type IRegistrationBody = Pick<Required<IChannel>, 'email' | 'password' | 'name'> & { passwordConfirmation: string }
export type IAuthResponse = Omit<IChannel, 'password' | 'videos'>

export const AuthService = {
	async login(payload: ILoginBody) {
		const res = await _axios.post<IAuthResponse>(
			`auth/login`,
			payload
		)
		return res.data
	},

	async register(payload: IRegistrationBody) {
		const res = await _axios.post<IAuthResponse>(
			`auth/register`,
			payload
		)
		return res.data
	},

	async logout() {
		const res = await _axios.get(`auth/logout`)
		return res.data
	}
}

