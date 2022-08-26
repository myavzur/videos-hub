import React from 'react'

import Current from './Current'
import { useAuth, useStoreDispatch } from '@/hooks'

import Search from './Search'

import styles from './Header.module.scss'
import UploadVideo from './UploadVideo/UploadVideo'
import { api } from '@/store/slices/api/api.slice'
import Link from 'next/link'
import { RiLoginBoxFill, RiLogoutBoxRFill } from 'react-icons/ri'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { logout } from '@/store/slices/channel/channel.actions'
import Line from '../../Line'


const Header: React.FC = () => {
	const dispatch = useStoreDispatch()
	const { channel } = useAuth()
	const { data } = api.useGetMyChannelQuery(null, { skip: !channel })

	return (
		<header className={styles.header}>
			<div className={styles.header__search}>
				<Search />
			</div>

			{(channel && data) ? 
				(
					<div className={styles.info}>
						<div className={styles.info__current}>
							<Current channel={data}/>
						</div>

						<button className={styles.info__upload_video}>
							<UploadVideo/>
						</button>

						<button className={styles.info__logout} onClick={() => dispatch(logout())}>
							<RiLogoutBoxRFill/>
						</button>
					</div>
				) 
				: 
				(
					<div className={styles.links}>
						<Link href="/authorization/sign-in">
							<a className={styles.links__link}>
								Login
							</a>
						</Link>

						<div className={styles.links__divider}/>

						<Link href="/authorization/sign-up">
							<a className={styles.links__link}>
								Join
							</a>
						</Link>
					</div>
				)
			}
		</header>
	)
}

export default Header
