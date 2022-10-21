import React from 'react'

import Video from '@/components/ui/Video'

import { CatalogProps } from './Catalog.interface'
import styles from './Catalog.module.scss'

const Catalog: React.FC<CatalogProps> = ({ videos, studioProps }) => {
	return (
		<div className={styles.catalog}>
			{
				videos && (
					videos.map(video => (
						<Video 
							video={video}
							studioProps={studioProps}
							key={video.id} 
						/>
					))
				) || (
					<div>На канале пока что нет видео!</div>
				)
			}
		</div>
	)
}

export default Catalog
