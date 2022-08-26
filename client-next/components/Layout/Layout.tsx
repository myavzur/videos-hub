import Head from "next/head"
import React, { PropsWithChildren } from "react"
import Header from "./Header"

import styles from './Layout.module.scss'
import Sidebar from "./Sidebar"

interface LayoutProps {
  title: string
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.main}>
        <Sidebar/>

        <section className={styles.content}>
          <Header/>

          <div className={styles.wrapper}>
            {children}
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Layout