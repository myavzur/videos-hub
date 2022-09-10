import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { useStoreSelector } from '@/hooks'
import { IMenuLink } from './menu.data'

import styles from './MenuLink.module.scss'

interface MenuItemProps {
	link: IMenuLink,
}

const MenuLink: React.FC<MenuItemProps> = ({ link }) => {
	
	/* 
	pathname - /c/[id]
	asPath   - /c/1
  */
 	const channel = useStoreSelector(state => state.channel.channel)
	const router = useRouter()

	// TODO: Integrate useAuth() from Redux
	// TODO: Swap link.path to channels/me
	if ( link.path === '/channels/me' && !channel ) {
		return null
	}

	return (
		<li>
			<Link href={link.path}>
				<a
					className={cn(
						styles['menu-link'], 
						{ [styles['menu-link_active']]: router.asPath === link.path }
					)}
				>
					<div 
						className={cn(
							styles['menu-link__content'], 
							{ [styles['menu-link__content_image']]: !!link.image }
						)}
					>
						{link.icon && <link.icon />}
						{link.image && (
							<Image src={link.image} alt={link.title} width={40} height={40} />
						)}
					</div>

					<p className={styles['menu-link__title']}> {link.title} </p>
				</a>
			</Link>
		</li>
	)
}

// TODO: Refactor conditions with classnames lib???
// cn(styles.menu_link, {[styles.active]: asPath === link.path}
// cn( styles.content, {[styles.image]: !!link.image})

export default MenuLink
