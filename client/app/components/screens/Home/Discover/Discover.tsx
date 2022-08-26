import React from 'react'

import { HomeProps } from "../Home.interface"

import VideoLarge from '@/components/ui/Video/VideoLarge'

import styles from './Discover.module.scss'

type DiscoverProps = Pick<HomeProps, 'topVideo' | 'randomVideo'>

const Discover: React.FC<DiscoverProps> = ({ topVideo, randomVideo }) => {
	return (
		<div className={styles.discover}>
			{topVideo && (
				<div className={styles.discover__top}>
					<VideoLarge video={topVideo} />
				</div>
			)}

			{randomVideo && (
				<div className={styles.discover__random}>
					<VideoLarge video={randomVideo} />
				</div>
			)}
		</div>
	)
}

export default Discover
