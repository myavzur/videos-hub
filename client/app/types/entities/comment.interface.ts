import { IChannel, IVideo, IBase } from '@/types/entities'

export interface IComment extends IBase {
	content: string

	channel: IChannel
	video: IVideo
}

export interface ICreateCommentBody extends Pick<IComment, 'content'> {
	videoId: IVideo['id']
}
