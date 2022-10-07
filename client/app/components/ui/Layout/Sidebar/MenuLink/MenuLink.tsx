import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { useAuth } from '@/hooks'

import { MenuLinkProps } from './MenuLink.interface'
import styles from './MenuLink.module.scss'

const MenuLink: React.FC<MenuLinkProps> = ({ link }) => {
 	const { channel } = useAuth()
	const router 	= useRouter()

	let isMustBeActive = false // For /channels/me

	if ( link.path === `/channels/me` ) {
		if (!channel) {
			return null
		}
		
		link.path = `/channels/${channel.id}`
		isMustBeActive = true
	}

	return (
		<li>
			<Link href={link.path}>
				<a
					className={cn(
						styles['menu-link'], 
						{ [styles['menu-link_active']]: (router.asPath === link.path) || isMustBeActive }
					)}
				>
					<div 
						className={cn(
							styles['menu-link__content'], 
							{ [styles['menu-link__content_image']]: !!link.image }
						)}
					>
						{link.icon && <link.icon />}
						{link.image && <Image src={link.image} alt={link.title} width={40} height={40} />}
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
