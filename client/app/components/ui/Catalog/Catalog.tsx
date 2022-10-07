import React from 'react'

import { IVideo } from '@/types/entities'

import Heading from '@/components/ui/Heading'
import Video from '@/components/ui/Video'

import styles from './Catalog.module.scss'


interface CatalogProps {
	videos?: IVideo[]
	
	headingProps: {
		title: string
	} 

	studioProps?: {
		removeHandler?: (videoId: IVideo['id']) => void
		withUpdateLink?: boolean
	}
}

const Catalog: React.FC<CatalogProps> = ({ videos, studioProps, headingProps }) => {
	return (
		<div className={styles.catalog}>
			<div className={styles['catalog__heading']}>
				<Heading>
					{headingProps.title}
				</Heading>
			</div>

			<div className={styles['catalog__videos']}>
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
		</div>
	)
}

export default Catalog
