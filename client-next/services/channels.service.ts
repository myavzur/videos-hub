import { axiosClassic } from "api/axios"
import { IChannel } from "@/types"

export const ChannelsService = {
  async getAll() {
    return await axiosClassic.get<IChannel[]>('/channels')
  },

  async getChannel(id: IChannel['id']) {
    return await axiosClassic.get<IChannel[]>(`/channels/id/${id}`)
  }
}