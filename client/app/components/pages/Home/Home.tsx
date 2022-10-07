import React from 'react'

import Catalog from '@/components/ui/Catalog'
import Layout from '@/components/ui/Layout'

import { HomeProps } from './Home.interface'
import Discover from './Discover'

const Home: React.FC<HomeProps> = ({ topVideo, randomVideo, newVideos }) => {
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
