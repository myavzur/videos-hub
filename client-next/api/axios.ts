import { getContentType } from '@/utils/api.utils';
import axios from 'axios';

export const API_URL = `${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}/api`

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType()
})