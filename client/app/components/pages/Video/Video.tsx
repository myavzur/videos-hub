import React, { useEffect } from "react"

import Layout from "@/components/ui/Layout"

import { VideoProps } from "./Video.interface"
import Player from "./Player"
import styles from './Video.module.scss'
import { useRouter } from "next/router"
import { videoApi } from "@/store/slices/api/videos.api"
import Comments from "./Comments"
import Details from "./Details"
import { IVideo } from "@/types/entities"

// TODO: Edit styles from this bullshit
const Video: React.FC<VideoProps> = () => {
  const { query } = useRouter()

  const { data: video } = videoApi.useGetVideoByIdQuery(String(query.id), { skip: !query.id })
  const [ updateViews ] = videoApi.useUpdateViewsMutation()
  

  // * Update video views on page loading
  useEffect(() => {
    if (query.id) {
      updateViews(String(query.id))
    }
  }, [updateViews, query])


  return (
    <Layout
      meta={{
        title: video?.name || '',
        description: `Watch video "${video?.name} on RandomTube today!"`
      }}
    >
      <div className={styles.layout}>
        <main className={styles['layout__left']}>
         <Player videoPath={video?.videoPath || ''} />
        </main>

        <aside className={styles['layout__right']}>
          <Comments 
            comments={video?.comments || []} 
            videoId={video?.id || ''} 
          />
        </aside>
      </div>

      <div className={styles.layout}>
        <main className={styles['layout__left']}>
          <Details video={video || {} as IVideo} />
        </main>

        <aside className={styles['layout__right']}/>
      </div>
    </Layout>
  )
}

export default Video