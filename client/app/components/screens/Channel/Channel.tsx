import React from "react"

import Layout  from "@/components/ui/Layout"
import Catalog from "@/components/ui/Catalog"
import Channel from "@/components/ui/Channel"
import ButtonSubscribe from "@/components/ui/ButtonSubscribe"

import { ChannelProps } from "./Channel.interface"
import styles from './Channel.module.scss'
import { BRAND_NAME } from "@/constants/brand.constants"
import Heading from "@/components/ui/Heading"


const ChannelPage: React.FC<ChannelProps> = ({ channel }) => {
  return (
    <Layout
      meta={{
        title: `${channel.name}'s channel `,
        description: `${channel.name} on ${BRAND_NAME}`
      }}
    >
      <div className={styles['channel-general']}>
        <div className={styles['channel-general__top']}>
          <Channel.Info channel={channel}/>
          <ButtonSubscribe toChannelId={channel.id} />
        </div>

        <article className={styles['channel-general__description']}> 
          {channel.description} 
        </article>
      </div>

      <Heading> {channel.name}`s videos </Heading>

      <Catalog
        videos={channel.videos}
      />
    </Layout>
  )
}

export default ChannelPage