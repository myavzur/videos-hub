import Heading from "@/components/ui/Heading"
import React from "react"

import FormAuth from "./FormAuth"


import { AuthenticationProps } from "./Authentication.interface"
import styles from './Authentication.module.scss'
import Head from "next/head"
import { BRAND_NAME } from "@/constants/brand.constants"
import VideoLarge from "@/components/ui/Video/VideoLarge"


const Authentication: React.FC<AuthenticationProps> = ({ randomVideo }) => {  
  return (
    <React.Fragment>
      <Head>
				<title>Authentication</title>
				<meta name='description' content={`Join ${BRAND_NAME} today`} />
			</Head>
      
      <div className={styles.layout}>
        <div className={styles.content}>
          <aside className={styles['random-video']}>
            <VideoLarge video={randomVideo} orientation='portait' />
          </aside>
          
          <main className={styles.form}>
            <Heading>
              Join {BRAND_NAME} today
            </Heading>

            <FormAuth/>
          </main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Authentication