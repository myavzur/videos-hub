import React from 'react'

import Catalog from '@/components/Catalog'
import Layout from '@/components/Layout'

import { IVideo } from '@/types'

import Discover from './Discover'

export interface HomeProps {
	randomVideo: IVideo
	mostPopularVideo: IVideo
	newVideos: IVideo[]
}

const Home: React.FC = ({}) => {
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
