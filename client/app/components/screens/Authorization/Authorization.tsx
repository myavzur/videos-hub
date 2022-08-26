import React, { PropsWithChildren} from "react"
import Head from 'next/head'

import { LayoutProps } from "@/components/ui/Layout/Layout.interface"

import styles from './Authorization.module.scss'
import classNames from "classnames"

const Authorization: React.FC<PropsWithChildren<LayoutProps>> = ({ meta, children }) => {
  return (
    <React.Fragment>
			<Head>
				<title>{meta.title}</title>
				<meta name='description' content={meta.description} />
			</Head>

      <div className={styles.layout}>
        <main className={styles.layout__content}>
          {children}
        </main>

        <aside className={styles.layout__preview}>
          <div className={classNames(styles.light, styles.light_x1)}></div>
          <div className={classNames(styles.light, styles.light_x2)}></div>
          <div className={classNames(styles.light, styles.light_x3)}></div>
          <div className={classNames(styles.light, styles.light_x4)}></div>
          <div className={classNames(styles.light, styles.light_x5)}></div>
          <div className={classNames(styles.light, styles.light_x6)}></div>
          <div className={classNames(styles.light, styles.light_x7)}></div>
          <div className={classNames(styles.light, styles.light_x8)}></div>
          <div className={classNames(styles.light, styles.light_x9)}></div>
        </aside>
      </div>
    </React.Fragment>
  )
}

export default Authorization