import Link from 'next/link'
import React from 'react'

import Menu from './Menu'
import { menu } from './Menu/menu.data'

import styles from './Sidebar.module.scss'

// TODO: Вывести меню через БД???
const Sidebar: React.FC = () => {
	// TODO: Получить профиль
	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles.logo}>RandomTube</a>
			</Link>

			<Menu title='Menu' items={menu} />
			{/* <Menu items={}/> */}

			<div className={styles.copyright}>© 2022 RandomTube by myavzur</div>
		</aside>
	)
}

export default Sidebar
