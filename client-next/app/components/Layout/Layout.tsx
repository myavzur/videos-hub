import Head from "next/head"
import React, { PropsWithChildren } from "react"
import Header from "./Header"

import styles from './Layout.module.scss'
import Sidebar from "./Sidebar"

interface LayoutProps {
  meta: {
    title: string
    description: string
  }
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ meta, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>

      <main className={styles.main}>
        <Sidebar/>

        <section className={styles.content}>
          <Header/>

          <div className={styles.content_wrapper}>
            {children}
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Layout