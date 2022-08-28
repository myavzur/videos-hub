import { IBase, IChannel } from "@/types"

export interface IVideo extends IBase {
  isPublic: boolean
  name: string
  description: string
  videoPath: string
  thumbnailPath: string
  
  duration: number
  views?: number
  likes?: number

  channel: IChannel
  comments: Comment[]
}

export interface IUpdateVideoParams extends Pick<IVideo, 'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'> {}