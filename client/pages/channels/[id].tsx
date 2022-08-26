import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"

import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"
import { ChannelsService } from "@/services/RandomTube"

import Channel, { ChannelProps } from "@/components/screens/Channel"

const ChannelPage: NextPageAuth<ChannelProps> = ({ channel }) => {
  return (
    <Channel channel={channel}/>
  )
}


// * SSG
// * Запускается на моменте Сборки проекта и генерирует эндпоинты под каждый канал
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: channels } = await ChannelsService.getAll()

    // ! Нужно специфицировать параметры для каждой страницы
    // * В моем случае каждая страница будет удачно находится по channel.id
    const paths = channels.map(channel => ({
      params: {
        id: channel.id.toString()
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