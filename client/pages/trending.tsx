import { GetStaticProps } from "next"

import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"
import Trending, { TrendingProps } from "@/components/screens/Trending"
import { VideosService } from "@/services/RandomTube"

const TrendingPage: NextPageAuth<TrendingProps> = ({ topVideos }) => {
  return (
    <Trending topVideos={topVideos} />
  )
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: topVideos } = await VideosService.getMostPopulars()
    
    return {
      props: {
        topVideos
      } as TrendingProps,
      revalidate: 60 // TODO: Узнать че делает
    }
  }
  catch (e) {
    console.log(`%cCould't call server from TrendingPage! ${e}`, 'color: red')

    return {
      props: {
        topVideos: []
      } as TrendingProps 
    }
  }
}

export default TrendingPage