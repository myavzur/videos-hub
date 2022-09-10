import { GetStaticProps } from "next"
import shuffle from 'lodash/shuffle'

import { IVideo } from "@/types"
import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Home from "@/components/screens/Home"

import { VideosService } from "@/services/RandomTube"

export interface HomePageProps {
	topVideo: IVideo
	randomVideo: IVideo
	newVideos: IVideo[]
}

const HomePage: NextPageAuth<HomePageProps> = (props) => {
  console.log(props)
  return (
    <Home {...props} />
  )
}


// ? SSG - Server Static Generation
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