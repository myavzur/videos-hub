import React from 'react'

import ChannelAvatar from '@/components/ui/Channel/Avatar'
import { useAuth } from '@/hooks'

import Search from './Search'

import styles from './Header.module.scss'
import ProfileMenu from './ProfileMenu/ProfileMenu'

// TODO: Make header
const Header: React.FC = () => {
	const { channel } = useAuth()

	return (
		<header className={styles.header}>
			<Search />

			<div className='text-clickable'>
				{channel && (
					<ChannelAvatar channel={channel}/>
				)}
			</div>
		</header>
	)
}

export default Header
