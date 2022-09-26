import { GetStaticProps } from "next"

import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"
import Trendings, { TrendingsProps } from "@/components/pages/Trendings"
import { VideosService } from "@/services/RandomTube"

const TrendingsPage: NextPageAuth<TrendingsProps> = ({ topVideos }) => {
  return (
    <Trendings topVideos={topVideos} />
  )
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: topVideos } = await VideosService.getMostPopulars()
    
    return {
      props: {
        topVideos
      } as TrendingsProps,
      revalidate: 60 // TODO: Узнать че делает
    }
  }
  catch (e) {
    console.log(`%cCould't call server! ${e}`, 'color: red')

    return {
      props: {
        topVideos: []
      } as TrendingsProps 
    }
  }
}

export default TrendingsPage