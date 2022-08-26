import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import { useAuth } from '@/hooks'

import { MenuLinkProps } from './MenuLink.interface'
import styles from './MenuLink.module.scss'

const MenuLink: React.FC<MenuLinkProps> = ({ link }) => {
 	const { channel } = useAuth()
	const router 			= useRouter()

	//  * For /channels/me
	let isMustBeActive = false 

	if ( link.isPrivate && !channel ) {
		return null
	}

	if ( link.path === `/channels/me` ) {		
		link.path = `/channels/${channel!.id}`
		isMustBeActive = true
	}

	return (
		<li>
			<Link href={link.path}>
				<a
					className={classNames(
						styles.menu_link, 
						{ [styles['menu_link--active']]: (router.asPath === link.path) || isMustBeActive }
					)}
				>
					<div 
						className={classNames(
							styles.menu_link__content, 
							{ [styles.menu_link__content_image]: Boolean(link.image) }
						)}
					>
						{link.icon && <link.icon />}
						{link.image && <Image src={link.image} alt={link.title} width={40} height={40} />}
					</div>

					<p className={styles.menu_link__title}> 
						{link.title} 
					</p>
				</a>
			</Link>
		</li>
	)
}

export default MenuLink
