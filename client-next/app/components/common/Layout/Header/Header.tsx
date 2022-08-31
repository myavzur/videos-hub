import React from 'react'

import Search from './Search'

import styles from './Header.module.scss'
import ProfileMenu from './ProfileMenu/ProfileMenu'

// TODO: Make header
const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Search />

			<div className='text-clickable'>
				<ProfileMenu/>
			</div>
		</header>
	)
}

export default Header
