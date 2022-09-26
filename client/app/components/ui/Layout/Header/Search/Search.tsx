import React from 'react'
import { RiSearchEyeLine } from 'react-icons/ri'

import Video from '@/components/ui/Video'
import { useSearch } from '@/hooks/useSearch'

import styles from './Search.module.scss'


const Search: React.FC = () => {
	const { handleSearch, term, response } = useSearch(500)

	return (
		<div className={styles['search']}>
			<label className={styles['search__field']}>
				<input 
					type="text" 
					placeholder='Search for videos...'
					value={term}
					onChange={handleSearch}
				/>

				<RiSearchEyeLine fill='white' height={10} width={10}/>
			</label>


			{response.isLoading && (
				<div className={styles['search__result']}>
					<h1>LOading...</h1>
				</div>
			)}

			{response.isSuccess && (
				<div className={styles['search__result']}>
					{
						response.data?.length ? (
							response.data.map(video => (
								<Video 
									isSmall 
									video={video} 
									key={video.id}
								/>
							))
						) : (
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
