import React from "react"

import Layout      from "@/components/ui/Layout"
import Catalog     from "@/components/ui/Catalog"
import ChannelInfo from "@/components/ui/ChannelInfo"
import ButtonSubscribe from "@/components/ui/ButtonSubscribe"

import { ChannelProps } from "./Channel.interface"
import styles from './Channel.module.scss'


const Channel: React.FC<ChannelProps> = ({ channel }) => {
  return (
    <Layout
      meta={{
        title: `${channel.name}'s channel `,
        description: `${channel.name} on RandomTube! Say hello to him, because he is talking: "${channel.description}" (c) ${channel.name}`
      }}
    >
      <div className={styles['channel-general']}>
        <div className={styles['channel-general__top']}>
          <ChannelInfo channel={channel}/>
          <ButtonSubscribe toChannelId={channel.id} />
        </div>

        <article className={styles['channel-general__description']}> 
          {channel.description} 
        </article>
      </div>

      <Catalog
        videos={channel.videos}
        headingProps={{
          title: 'Мои видеосука'
        }}
      />
    </Layout>
  )
}

export default Channel