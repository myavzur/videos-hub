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
import { BRAND_NAME } from "@/constants/brand.constants"


const Video: React.FC<VideoProps> = () => {
  const { query } = useRouter()

  const { data, isLoading } = videoApi.useGetVideoByIdQuery(String(query.id), { skip: !query.id })
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
        title: `${isLoading ? `Loading [${query.id}]...` : data?.name ? data?.name : 'Bugs apear when you are not ready for them'}`,
        description: `Watch video "${data?.name || 'VIDEO'} on ${BRAND_NAME} today!"`
      }}
    >
      {isLoading && <h1>Loading...</h1>}
      {data && (
        <div className={styles.video}>
          <main className={styles.video__player}>
            <Player videoPath={data?.videoPath || ''} />
          </main>

          <aside className={styles.video__comments}>
            <Comments 
              comments={data?.comments || []} 
              videoId={data?.id || ''} 
            />
          </aside>         
          
          <div className={styles.video__details}>
            <Details video={data || {} as IVideo} />
          </div>          
        </div>
      )}
    </Layout>
  )
}

export default Video