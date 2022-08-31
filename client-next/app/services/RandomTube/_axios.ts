import axios from 'axios'
import { API_HEADERS, API_URL } from './constants'

export const _axios = axios.create({
	baseURL: API_URL,
	headers: API_HEADERS,
	withCredentials: true
})
