import { IBase, IChannel } from '@/types/entities'

export interface IVideo extends IBase {
	isPublic: boolean
	name: string
	description: string
	videoPath: string
	thumbnailPath: string

	duration: number
	views: number
	likes: number

	channel: IChannel
	comments: Comment[]
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
