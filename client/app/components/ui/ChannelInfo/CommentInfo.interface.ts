import { IChannel, IComment } from "@/types/entities"

export interface ChannelInfoProps {
  channel: IChannel
  message?: IComment['content']
}