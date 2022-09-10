import React, { useEffect } from 'react'

import { useStoreSelector } from '@/hooks'
import { api } from '@/store/slices/api/api.slice'

const ProfileMenu: React.FC = () => {
	const channel = useStoreSelector(state => state.channel.channel)

	const { data, isLoading } = api.useGetMyChannelQuery(null, {
		skip: !!channel // ? Авторизация не прошла. Чтобы не выбило ошибку
	})

	useEffect(() => {
		if (data?.email) {
			console.log(`%cProfileMenu: Fetched by RTK Query email: ${data.email}`, 'color: yellow')
		}
		
		if (channel?.email) {
			console.log(`%cProfileMenu: Got from Cache email: ${channel.email}`, 'color: yellow')
		}
	}, [data, isLoading, channel]) 


	if (isLoading) return <h1>Loading...</h1>
	
	return (
		<React.Fragment>
			{data?.email || channel?.email}
		</React.Fragment>
	)
}

export default ProfileMenu
