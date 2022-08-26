import { axiosClassic } from "api/axios"
import { IVideo } from "@/types"

export const VideosService = {
  async getAll() {
    return await axiosClassic.get<IVideo[]>('/videos')
  },

  async getVideo(id: IVideo['id']) {
    return await axiosClassic.get<IVideo[]>(`/videos/id/${id}`)
  },

  async getMostPopulars() {
    return await axiosClassic.get<IVideo[]>(`/videos/most-populars`)
  }
}