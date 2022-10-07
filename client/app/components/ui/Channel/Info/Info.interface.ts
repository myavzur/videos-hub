import { IChannel, IComment } from "@/types/entities"

export interface InfoProps {
  channel: IChannel
  message?: IComment['content']
}