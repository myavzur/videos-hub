import React from "react"

import { IChannel } from "@/types"
import Layout from "@/components/common/Layout"
import Catalog from "@/components/common/Catalog"
import ChannelInfo from "@/components/common/ChannelInfo"

interface ChannelProps {
  channel: IChannel
}

const Channel: React.FC<ChannelProps> = ({ channel }) => {
  return (
    <Layout
      meta={{
        title: `${channel.name}'s channel `,
        description: `
          ${channel.name} on RandomTube! 
          Say hello to him, because he is talking: "${channel.description}" (c) ${channel.name}
        `
      }}
    >
      <div className="mb-10 w-1/3">
        <div className="flex items-center gap-12">
          <ChannelInfo channel={channel}/>
        </div>

        <article className="text-gray-500 mt-3"> {channel.description} </article>
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