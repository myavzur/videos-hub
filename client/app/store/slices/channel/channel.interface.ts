import { IChannel } from "@/types/entities"

export interface ChannelState {
	channel: IChannel | null
	loadingStatus: 'idle' | 'loading' | 'error'
}