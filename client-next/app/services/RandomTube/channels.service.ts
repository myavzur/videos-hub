import { IChannel } from '@/types'

import { _axios } from '@/services/RandomTube'

export const ChannelsService = {
	async getAll() {
		return await _axios.get<IChannel[]>('/channels')
	},

	async getChannel(id: IChannel['id']) {
		return await _axios.get<IChannel[]>(`/channels/id/${id}`)
	}
}
