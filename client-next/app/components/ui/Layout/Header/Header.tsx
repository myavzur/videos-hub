import React from 'react'

import ChannelAvatar from '@/components/ui/ChannelAvatar'
import { useStoreSelector } from '@/hooks'

import Search from './Search'

import styles from './Header.module.scss'

// TODO: Make header
const Header: React.FC = () => {
	const channel = useStoreSelector(state => state.channel.channel)

	return (
		<header className={styles.header}>
			<Search />

			<div className='text-clickable'>
				{/* <ProfileMenu/> */}
				{channel && (
					<ChannelAvatar channel={channel}/>
				)}
			</div>
		</header>
	)
}

export default Header
