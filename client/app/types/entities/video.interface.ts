import { IBase, IChannel, IComment } from '@/types/entities'

export interface IVideo extends IBase {
	isPublic: boolean
	name: string
	description: string
	videoPath: string
	thumbnailPath: string

	duration: number
	views: number
	likesValue: number

	isLiked?: boolean
	channel: IChannel
	comments: IComment[]
}

export interface ICreateVideoBody 
	extends Pick<
		IVideo,
 	'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
export interface IUpdateVideoBody
	extends Pick<
		IVideo,
		'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
