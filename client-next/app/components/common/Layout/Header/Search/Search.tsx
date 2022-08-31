import React from 'react'
import { RiSearchEyeLine } from 'react-icons/ri'

import { useSearch } from './useSearch'
import styles from './Search.module.scss'

const Search: React.FC = () => {
	const { handleSearch, term, response } = useSearch()

	return (
		<div className={styles.search}>
			<label className={styles['search-field']}>
				<input 
					type="text" 
					placeholder='Search for videos...'
					value={term}
					onChange={handleSearch}
				/>

				<RiSearchEyeLine fill='white'/>
			</label>

			{response.isSuccess && (
				<div className={styles['search-result']}>

					{
						response.data?.length 
						? 
						(
							response.data.map(video => (
								// <VideoItem isSmall video={video} key={video.id}/>
								<div key={video.id}>{video.name}</div>
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
