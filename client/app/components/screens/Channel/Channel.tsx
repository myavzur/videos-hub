import React from "react"

import Layout  from "@/components/ui/Layout"
import Catalog from "@/components/ui/Catalog"
import Channel from "@/components/ui/Channel"
import ButtonSubscribe from "@/components/ui/ButtonSubscribe"

import { ChannelProps } from "./Channel.interface"
import styles from './Channel.module.scss'
import { BRAND_NAME } from "@/constants/brand.constants"
import Heading from "@/components/ui/Heading"
import { IVideo } from "@/types/entities"


const ChannelPage: React.FC<ChannelProps> = ({ channel }) => {
  return (
    <Layout
      meta={{
        title: `${channel.name}'s channel `,
        description: `Watch ${channel.name} on ${BRAND_NAME}!`
      }}
    >
      <div className={styles.channel_general}>
        <div className={styles.channel_general__top}>
          <Channel.Info channel={channel}/>
          <ButtonSubscribe toChannelId={channel.id} />
        </div>

        <article className={styles.channel_general__description}> 
          {channel.description} 
        </article>
      </div>

      <Heading> Videos 🎬 </Heading>

      {channel.videos?.length 
        ? 
        (<Catalog videos={channel.videos} />)
        : 
        (<h1>There is no videos on the channel yet!</h1>)
      }
    </Layout>
  )
}

export default ChannelPage