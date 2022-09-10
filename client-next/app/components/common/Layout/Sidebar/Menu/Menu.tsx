import React from 'react'

import Line from '@/components/common/Line'

import MenuLink from './MenuLink'
import { IMenuLink } from './menu.data'

import styles from './Menu.module.scss'

interface MenuProps {
	title: string
	links: IMenuLink[]
}

const Menu: React.FC<MenuProps> = ({ title, links }) => {
	return (
		<nav className={styles['menu']}>
			<h3 className={styles['menu__title']}>{title}</h3>

			<ul className={styles['menu__list']}>
				{
					links.map(link => {
						return (
							<MenuLink 
								link={link} 
								key={link.path} 
							/>
						)
					})
				}
			</ul>

			<Line />
		</nav>
	)
}

export default Menu
