import { _axios } from "@/services/RandomTube"
import { IChannel } from "@/types"

export const ChannelsService = {
  async getAll() {
    return await _axios.get<IChannel[]>('/channels')
  },

  async getChannel(id: IChannel['id']) {
    return await _axios.get<IChannel[]>(`/channels/id/${id}`)
  }
}