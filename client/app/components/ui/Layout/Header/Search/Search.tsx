import React, { useEffect } from 'react'
import { RiSearchEyeLine } from 'react-icons/ri'

import { useSearch } from './hooks'
import styles from './Search.module.scss'
import Link from 'next/link'
import { useOutside } from '@/hooks'
import { animated, useTransition } from '@react-spring/web'


const Search: React.FC = () => {
	const [ ref, isVisible, setVisible ] = useOutside(true)
	const { handleSearch, term, termDebounced, response } = useSearch(500)
	
	const transition = useTransition(isVisible && termDebounced, {
		from: {
			transform: 'translateY(-100%)',
			opacity: 0
		},
		enter: {
			transform: 'translateY(0%)',
			opacity: 1
		},
		leave: {
			transform: 'translateY(-100%)',
			opacity: 0
		}
	})

	let resultContent: null | React.ReactNode = null;

	if (response.isLoading) {
		resultContent = (
			<h1>Loading...</h1>
		)
	}

	if (
		(response.isSuccess) && 
		(response.data?.length)
	) {
		resultContent = (
			response.data.map(video => (
				<div 
					className={styles.search__result_item}
					key={video.id}
				>
					<Link href={`/videos/${video.id}`}>
						<a>{video.name}</a>
					</Link>
				</div>
			))
		)
	}

	if (
		(response.isSuccess) && 
		(response.data?.length === 0)
	) {
		resultContent = (
			<div>
				Videos by <span style={{color: "#6C5ECF"}}> {term} </span> not found!
			</div>
		)
	}

	return (
		<div 
			className={styles.search}
			ref={ref}
			onClick={() => setVisible(true)}
		>
			<label className={styles.search__panel}>
				<input 
					type="text" 
					placeholder='Search for videos...'
					value={term}
					onChange={handleSearch}
				/>

				<RiSearchEyeLine fill='white' height={10} width={10}/>
			</label>

			{transition((style, isVisible) => {
				return isVisible && (
					<animated.div style={style} className={styles.search__result}>
						{resultContent}
					</animated.div>
				)
			})}
		</div>
	)
}

export default Search
