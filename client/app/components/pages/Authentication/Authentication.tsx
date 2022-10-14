import Heading from "@/components/ui/Heading"
import React from "react"

import FormAuth from "./FormAuth"
import VideoRandom from "./VideoRandom"

import { AuthenticationProps } from "./Authentication.interface"
import styles from './Authentication.module.scss'
import Head from "next/head"


const Authentication: React.FC<AuthenticationProps> = ({ randomVideo }) => {  
  return (
    <React.Fragment>
      <Head>
				<title>Authentication</title>
				<meta name='description' content="Join RandomTube today" />
			</Head>
      
      <div className={styles.layout}>
        <div className={styles.content}>
          <aside className={styles['random-video']}>
            <VideoRandom video={randomVideo}/>
          </aside>
          
          <main className={styles.form}>
            <h1 className={styles.form__heading}>
              Join RandomTube
            </h1>

            <FormAuth/>
          </main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Authentication