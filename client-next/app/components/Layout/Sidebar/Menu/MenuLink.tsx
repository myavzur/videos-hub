import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { IMenuLink } from './menu.data'

import styles from './MenuLink.module.scss'

interface MenuItemProps {
	item: IMenuLink
}

const MenuLink: React.FC<MenuItemProps> = ({ item }) => {
	// const { channel } = useAuth()

	/* 
    pathname - /c/[id]
    asPath   - /c/1
  */
	const { asPath } = useRouter()

	if (item.link === '/my-channel') {
		return null
	}
	// if (item.link === 'my-channel') {
	//   if(!channel) return null

	//   item.link = `/c/${channel.id}`
	// }

	return (
		<li>
			<Link href={item.link}>
				<a
					className={cn(styles.menu_link, {
						[styles.active]: asPath === item.link
					})}
				>
					<div className={cn(styles.content, { [styles.image]: !!item.image })}>
						{item.icon && <item.icon />}
						{item.image && (
							<Image src={item.image} alt={item.title} width={40} height={40} />
						)}
					</div>

					<p className={styles.title}> {item.title} </p>
				</a>
			</Link>
		</li>
	)
}

// TODO: Refactor conditions with classnames lib???
// cn(styles.menu_item, {[styles.active]: asPath === item.link}
// cn( styles.content, {[styles.image]: !!item.image})

export default MenuLink
