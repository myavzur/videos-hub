import React from 'react'

import Catalog from '@/components/ui/Catalog'
import Layout from '@/components/ui/Layout'

import { HomeProps } from './Home.interface'
import Discover from './Discover'
import Modal from '@/components/ui/Modal'
import { useOutside } from '@/hooks'
import Heading from '@/components/ui/Heading'

const Home: React.FC<HomeProps> = ({ topVideo, randomVideo, newVideos }) => {

	return (
		<Layout
			meta={{
				title: 'Home',
				description: 'RandomTube home page with most popular and new videos.'
			}}
		>
			<Heading> Discover ♿ </Heading>

			<Discover 
				randomVideo={randomVideo} 
				topVideo={topVideo}
			/>
			
			<Heading> News 🌌☄️ </Heading>
			<Catalog 
				videos={newVideos} 
			/>
		</Layout>
	)
}

export default Home
