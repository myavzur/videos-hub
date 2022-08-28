import { IChannel, IVideo } from '@/types'

export interface IComment {
	content: string

	channel: IChannel
	video: IVideo
}

export interface ICreateCommentParams extends Pick<IComment, 'content'> {
	videoId: IVideo['id']
}
