import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

import styles from './Layout.module.scss'

interface LayoutProps {
	meta: {
		title: string
		description: string
	}
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
	meta,
	children
}) => {
	return (
		<React.Fragment>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta.description} />
			</Head>

			<main className={styles.layout}>
				<Sidebar />

				<section className={styles['layout__content']}>
					<Header />

					<div className={styles['layout__content-wrapper']}> {children} </div>
				</section>
			</main>
		</React.Fragment>
	)
}

export default Layout
