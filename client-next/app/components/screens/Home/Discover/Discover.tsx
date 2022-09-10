import React from 'react'

import styles from './Discover.module.scss'
import { HomeProps } from '../Home'
import VideoLarge from '@/components/common/Video/VideoLarge'

type DiscoverProps = Pick<HomeProps, 'topVideo' | 'randomVideo'>

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
