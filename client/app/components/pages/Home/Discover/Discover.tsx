import React from 'react'

import { HomePageProps } from "@/types/pages/home.interface"

import VideoLarge from '@/components/ui/Video/VideoLarge'

import styles from './Discover.module.scss'


type DiscoverProps = Pick<HomePageProps, 'topVideo' | 'randomVideo'>

const Discover: React.FC<DiscoverProps> = ({ topVideo, randomVideo }) => {
	return (
		<div className={styles.discover}>
			<div className={styles['discover__top-video']}>
				<VideoLarge video={topVideo} />
			</div>

			<div className={styles['discover__random-video']}>
				<VideoLarge video={randomVideo} />
			</div>
		</div>
	)
}

export default Discover