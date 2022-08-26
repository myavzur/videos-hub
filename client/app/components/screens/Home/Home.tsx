import React from 'react'

import Catalog from '@/components/ui/Catalog'
import Layout from '@/components/ui/Layout'

import { HomeProps } from './Home.interface'
import Discover from './Discover'
import Heading from '@/components/ui/Heading'

const Home: React.FC<HomeProps> = ({ topVideo, randomVideo, newVideos }) => {

	return (
		<Layout
			meta={{
				title: 'Home',
				description: 'RandomTube home page with most popular and new videos.'
			}}
		>
			{(topVideo || randomVideo) && (
				<React.Fragment>
					<Heading> Discover 🪐 </Heading>

					<Discover 
						randomVideo={randomVideo} 
						topVideo={topVideo}
					/>
				</React.Fragment>
			)}
			
			<Heading> News ☄️ </Heading>
			
			{newVideos 
				? (
					<Catalog 
						videos={newVideos} 
					/>
				)
				: (
					<h1>There is no videos in out database yet 🛸</h1>
				)
			}
		</Layout>
	)
}

export default Home
