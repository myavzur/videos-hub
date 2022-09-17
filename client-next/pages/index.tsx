import { GetStaticProps } from "next"
import shuffle from 'lodash/shuffle'

import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"
import { HomePageProps } from "@/types/pages/home.interface"
import { IVideo } from "@/types/entities"

import Home from "@/components/screens/Home"

import { VideosService } from "@/services/RandomTube"


const HomePage: NextPageAuth<HomePageProps> = (props) => {
  return (
    <Home {...props} />
  )
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newVideos } = await VideosService.getAll()
    const { data: topVideos } = await VideosService.getMostPopulars()
    
    return {
      props: {
        newVideos,
        topVideo: topVideos[0],
        randomVideo: 
          shuffle(
            newVideos.filter( video => video.id !== topVideos[0].id )
          )[0]
          ||
          ({} as IVideo)
      } as HomePageProps
    }
  }
  catch (e) {
    console.log(`%cCould't call server! ${e}`, 'color: red')
    return {
      props: {
        newVideos: [],
        topVideo: {} as IVideo,
        randomVideo: {} as IVideo
      } as HomePageProps 
    }
  }
}

export default HomePage