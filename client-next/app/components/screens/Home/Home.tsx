import React, { useEffect } from 'react'

import { HomePageProps } from '@/types/pages/home.interface'

import Discover from './Discover'
import Catalog from '@/components/ui/Catalog'
import Layout from '@/components/ui/Layout'

import { useStoreDispatch, useStoreSelector } from '@/hooks'

import { login } from '@/store/slices/channel/channel.actions'

const Home: React.FC<HomePageProps> = ({ topVideo, randomVideo, newVideos }) => {
	const channel  = useStoreSelector(state => state.channel.channel)
	const dispatch = useStoreDispatch()

	// TODO: Make form and delete it 
	useEffect(() => {
		if (!channel) {
			dispatch(
				login({email: "perfect@mail.ru",	password: "perfectperfect"})
			)

			console.group('%cHome: No Cache or not logged in', 'color: yellow')
				console.log('%cHome: Logging...', 'color: lime')
			console.groupEnd()
		
			return 
		}

		console.log(`%cHome: You are logged in as ${channel.email}`, 'color: lime')
	}, [dispatch, channel])

	return (
		<Layout
			meta={{
				title: 'Home',
				description: 'RandomTube home page with most popular and new videos.'
			}}
		>
			<Discover 
				randomVideo={randomVideo} 
				topVideo={topVideo}
			/>
			<Catalog 
				headingProps={{
					title: '✨News✨'
				}}
				videos={newVideos} />
		</Layout>
	)
}

export default Home
