import { useStoreSelector } from '@/hooks'
import { api } from '@/store/slices/api/api.slice'
import React from 'react'

const ProfileMenu: React.FC = () => {
	const channel = useStoreSelector(state => state.channel.channel)

	const { data, isLoading } = api.useGetMyChannelQuery(null, {
		skip: !!channel // ? Авторизация не прошла. Чтобы не выбило ошибку
	})

	if (isLoading) return <h1>Loading...</h1>
	
	return <React.Fragment>{data?.email && `Fetched by RTK email: ${data.email}` || (channel?.email && `Channel email: ${channel.email}`)}</React.Fragment>
}

export default ProfileMenu
