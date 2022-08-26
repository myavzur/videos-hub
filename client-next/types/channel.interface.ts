import { IBase } from "@/utils/base.interface"
import { IVideo } from "./video.interface"

export interface IChannel extends IBase {
  email: string
  password: string
  avatarPath: string
  name: string
  description: string
  
  isVerified?: boolean
  subscribersCount: number

  videos?: IVideo[]
  subscriptions: ISubscription[]
}

export interface ISubscription extends IBase {
  toChannel: IChannel
}