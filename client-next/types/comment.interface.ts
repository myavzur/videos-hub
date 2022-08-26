import { IChannel } from "./channel.interface"
import { IVideo } from "./video.interface"

export interface IComment {
  content: string

  channel: IChannel
  video: IVideo
}

export interface ICreateCommentParams extends Pick<IComment, 'content'> {
  videoId: IVideo['id']
}