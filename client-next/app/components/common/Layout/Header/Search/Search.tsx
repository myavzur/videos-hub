import React from 'react'
import { RiSearchEyeLine } from 'react-icons/ri'

import { useSearch } from './useSearch'
import styles from './Search.module.scss'
import VideoItem from '@/components/common/VideoItem'

const Search: React.FC = () => {
	const { handleSearch, term, response } = useSearch(500)

	return (
		<div className={styles.search}>
			<label className={styles['search-field']}>
				<input 
					type="text" 
					placeholder='Search for videos...'
					value={term}
					onChange={handleSearch}
				/>

				<RiSearchEyeLine fill='white' height={10} width={10}/>
			</label>

			{response.isLoading && <h1>LOading...</h1>}
			{response.isSuccess && (
				<div className={styles['search-result']}>

					{
						response.data?.length 
						? 
						(
							response.data.map(video => (
								<VideoItem isSmall video={video} key={video.id}/>
							))
						)	
						: 
						(
							<div>
								Videos by <span style={{color: "#6C5ECF"}}> {term}</span> not found!
							</div>
						)
					}
				</div>
			)}
		</div>
	)
}

export default Search
