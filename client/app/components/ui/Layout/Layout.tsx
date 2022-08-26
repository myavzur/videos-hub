import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

import { LayoutProps } from './Layout.interface'
import styles from './Layout.module.scss'


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
				<div className={styles.layout__sidebar}>
					<Sidebar />
				</div>

				<section className={styles.layout__content}>
					<Header />

					<div className={styles.layout__content_wrapper}> {children} </div>
				</section>
			</main>
		</React.Fragment>
	)
}

export default Layout
