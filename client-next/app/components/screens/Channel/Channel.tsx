import React from "react"

import { IChannel } from "@/types/entities"

import Layout      from "@/components/ui/Layout"
import Catalog     from "@/components/ui/Catalog"
import ChannelInfo from "@/components/ui/ChannelInfo"

import styles from './Channel.module.scss'


interface ChannelProps {
  channel: IChannel
}

const Channel: React.FC<ChannelProps> = ({ channel }) => {
  return (
    <Layout
      meta={{
        title: `${channel.name}'s channel `,
        description: `${channel.name} on RandomTube! Say hello to him, because he is talking: "${channel.description}" (c) ${channel.name}`
      }}
    >
      <div className={styles['channel-general']}>
        <ChannelInfo channel={channel}/>

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