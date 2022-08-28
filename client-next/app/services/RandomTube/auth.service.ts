import { _axios } from "@/services/RandomTube/_axios";
import { IChannel } from "@/types/channel.interface";


export const AuthService = {
  async signIn(email: string, password: string) {
    const response = await _axios.post<IAuthBody>('auth/sign-in', {
      email, password
    })

    console.log(response)

    return response.data
  },

  async signUp(email: string, password: string) {
    const response = await _axios.post<IAuthBody>('auth/sign-up', {
      email, password
    })

    return response.data
  }
}


export interface IAuthBody {
  channel: Pick<IChannel, 'id' | 'email'> | null;
}