import Link from 'next/link'
import React from 'react'

import Menu from './Menu'
import { menu } from './Menu/menu.data'

import styles from './Sidebar.module.scss'

// TODO: Вывести меню через БД???
const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles['sidebar__logo']}>Бляяяя</a>
			</Link>

			<Menu title='Menu' links={menu} />
			{/* <Menu items={}/> */}

			<div className={styles['sidebar__copyright']}>© 2022 RandomTube by myavzur</div>
		</aside>
	)
}

export default Sidebar
