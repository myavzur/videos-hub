import React from 'react'
import Link from 'next/link'

import { useAuth } from '@/hooks'
import Logo from '@/components/ui/Logo'

import { api } from '@/store/slices/api/api.slice'

import Menu from './Menu'
import { menu } from './Menu/menu.data'
import styles from './Sidebar.module.scss'
import { BRAND_NAME } from '@/constants/brand.constants'


// TODO: Вывести меню через БД???
const Sidebar: React.FC = () => {
	const { channel } = useAuth()
	const { data } = api.useGetMyChannelQuery(null, {
		skip: !channel
	})

	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles['sidebar__logo']}>
					<Logo/>
				</a>
			</Link>

			<Menu title='Menu' links={menu} />

			{channel?.subscriptions?.length && (
				<Menu 
					title='Subscriptions' 
					links={
						data?.subscriptions.map(({toChannel}) => {
							return {
								image: toChannel.avatarPath,
								title: toChannel.name,
								path: `/channels/${toChannel.id}`
							}
						}) || []
					} 
				/>
			)}

			<div className={styles['sidebar__copyright']}>© 2022 {BRAND_NAME} by HandsUp! (myavzur)</div>
		</aside>
	)
}

export default Sidebar
