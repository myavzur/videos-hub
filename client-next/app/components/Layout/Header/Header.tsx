import React from 'react'

import Search from './Search'

import styles from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<div className='text-clickable'>ICONS</div>
		</header>
	)
}

export default Header
