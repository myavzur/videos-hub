import { IBase, IVideo } from '@/types/entities'


export enum SubscriptionResults {
	UNSUBSCRIBED, 
	SUBSCRIBED
}

export interface IChannel extends IBase {
	email: string
	name: string
	avatarPath: string
	description?: string
	password?: string

	isVerified: boolean
	subscribersValue: number

	subscriptions: ISubscription[]
	videos?: IVideo[]
}

export type ILikedVideos = {
	id: number
	video: IVideo
}[]

export interface ISubscription extends IBase {
	toChannel: IChannel
}

