import React from 'react'

import ChannelAvatar from '@/components/ui/Channel/Avatar'
import { useAuth } from '@/hooks'

import Search from './Search'
import AuthorizationLinks from './AuthorizationLinks'

import styles from './Header.module.scss'

// TODO: Make header
const Header: React.FC = () => {
	const { channel } = useAuth()

	return (
		<header className={styles.header}>
			<Search />

			<div className='text-clickable'>
				{channel 
					? <ChannelAvatar channel={channel}/>
					: <AuthorizationLinks/>
				}
			</div>
		</header>
	)
}

export default Header
