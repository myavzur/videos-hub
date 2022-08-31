import React, { useEffect } from 'react'

import Catalog from '@/components/common/Catalog'
import Layout from '@/components/common/Layout'

import { IVideo } from '@/types'

import Discover from './Discover'
import { login } from '@/store/slices/channel/channel.actions'
import { useStoreDispatch, useStoreSelector } from '@/hooks'

export interface HomeProps {
	randomVideo: IVideo
	mostPopularVideo: IVideo
	newVideos: IVideo[]
}

const Home: React.FC = ({}) => {
	const channel  = useStoreSelector(state => state.channel.channel)
	const dispatch = useStoreDispatch()

	// TODO: Make form and delete it 
	useEffect(() => {
		if (!channel) {
			dispatch(
				login({email: "root@mail.ru",	password: "rootrootroot"})
			)
			return alert('Logging...')
		}
		console.log(channel)

		alert(`You are logged in as ${channel.email}`)
	}, [])

	return (
		<Layout
			meta={{
				title: 'Home',
				description: 'RandomTube home page with most popular and new videos.'
			}}
		>
			<Discover />
			<Catalog />
		</Layout>
	)
}

export default Home
