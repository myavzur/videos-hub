import React, { useEffect } from 'react'

import { useStoreSelector } from '@/hooks'
import { api } from '@/store/slices/api/api.slice'


const ProfileMenu: React.FC = () => {
	const channel = useStoreSelector(state => state.channel.channel)

	const { data, isLoading } = api.useGetMyChannelQuery(null, {
		skip: !channel
	})

	if (isLoading) return <h1>Loading...</h1>
	
	return (
		<React.Fragment>
			{data?.email || channel?.email}
		</React.Fragment>
	)
}

export default ProfileMenu
