import { axiosClassic } from "api/axios";
import { IAuthData } from "./auth.interface";


export const AuthService = {
  async signIn(email: string, password: string) {
    const response = await axiosClassic.post<IAuthData>('auth/sign-in', {
      email, password
    })

    return response.data
  },

  async signUp(email: string, password: string) {
    const response = await axiosClassic.post<IAuthData>('auth/sign-up', {
      email, password
    })

    return response.data
  }
}