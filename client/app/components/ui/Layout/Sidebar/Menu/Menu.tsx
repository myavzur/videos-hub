import React from 'react'

import Line from '@/components/ui/Line'

import { MenuLinkProps } from '../MenuLink/MenuLink.interface'
import MenuLink from '../MenuLink/MenuLink'

import styles from './Menu.module.scss'


interface MenuProps {
	title: string
	links: MenuLinkProps['link'][]
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
