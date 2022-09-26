import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"

import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"
import { ChannelsService } from "@/services/RandomTube"

import Channel, { ChannelProps } from "@/components/pages/Channel"

const ChannelPage: NextPageAuth<ChannelProps> = ({ channel }) => {
  return (
    <Channel channel={channel}/>
  )
}
ChannelPage.isPrivatePage = true


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: channels } = await ChannelsService.getAll()

    const paths = channels.map(channel => ({
      params: {
        id: String(channel.id)
      }
    }))

    return {
      paths,
      fallback: 'blocking'
    }
  }
  catch (e) {
    return {
      paths: [],
      fallback: false
    }
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: channel } = await ChannelsService.getChannel(String(params?.id))

    return {
      props: {
        channel
      } as ChannelProps
    } 
  }
  catch (e) {
    return {
      props: {
        channel: {} as ChannelProps
      }
    }
  }
}



export default ChannelPage