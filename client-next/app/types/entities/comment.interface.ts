import { IChannel, IVideo } from '@/types/entities'

export interface IComment {
	content: string

	channel: IChannel
	video: IVideo
}

export interface ICreateCommentBody extends Pick<IComment, 'content'> {
	videoId: IVideo['id']
}