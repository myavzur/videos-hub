import { useAuth, useStoreSelector } from '@/hooks'
import { api } from '@/store/slices/api/api.slice'
import Link from 'next/link'
import React from 'react'

import Menu from './Menu'
import { menu } from './Menu/menu.data'

import styles from './Sidebar.module.scss'


// TODO: Вывести меню через БД???
const Sidebar: React.FC = () => {
	const { channel } = useAuth()
	const { data } = api.useGetMyChannelQuery(null, {
		skip: !channel
	})

	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles['sidebar__logo']}>Бляяяя</a>
			</Link>

			<Menu title='Menu' links={menu} />

			{channel && (
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

			<div className={styles['sidebar__copyright']}>© 2022 RandomTube by myavzur</div>
		</aside>
	)
}

export default Sidebar
