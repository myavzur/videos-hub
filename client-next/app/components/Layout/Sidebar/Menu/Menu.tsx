import React from 'react'

import Line from '@/components/Line'

import MenuLink from './MenuLink'
import { IMenuLink } from './menu.data'

import styles from './Menu.module.scss'

interface MenuProps {
	title: string
	items: IMenuLink[]
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
	return (
		<nav className={styles.menu}>
			<h3 className={styles.title}>{title}</h3>

			<ul className={styles.list}>
				{items.map(item => (
					<MenuLink item={item} key={item.link} />
				))}
			</ul>

			<Line />
		</nav>
	)
}

export default Menu
