import axios from 'axios'

/**
 * ? RNDM - Random (Tube) API URL
 */
export const RNDM_API_URL = `${process.env.NEXT_CLIENT_URL}/api`

export const _axios = axios.create({
	baseURL: RNDM_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
})
