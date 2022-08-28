import { IVideo } from "@/types"
import { _axios } from "@/services/RandomTube"

export const VideosService = {
  async getAll() {
    return await _axios.get<IVideo[]>('/videos')
  },

  async getVideo(id: IVideo['id']) {
    return await _axios.get<IVideo[]>(`/videos/id/${id}`)
  },

  async getMostPopulars() {
    return await _axios.get<IVideo[]>(`/videos/most-populars`)
  }
}