import { GetStaticProps } from "next"
import shuffle from 'lodash/shuffle'

import { IVideo } from "@/types/entities"
import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Home, { HomeProps } from "@/components/screens/Home"

import { VideosService } from "@/services/RandomTube"


const HomePage: NextPageAuth<HomeProps> = (props) => {
  return (
    <Home {...props} />
  )
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newVideos } = await VideosService.getAll()
    const { data: topVideos } = await VideosService.getMostPopular()
    
    let randomVideo: IVideo | null = null;
    
    if (topVideos[0]?.id) {
      randomVideo = shuffle(
        newVideos.filter( video => video.id !== topVideos[0].id )
        )[0];
      }
    else {
      randomVideo = shuffle(newVideos)[0];
    }
    
    return {
      props: {
        topVideo: topVideos[0] || null,
        randomVideo,
        newVideos,
      } as HomeProps
    }
  }
  catch (e) {
    console.error(`%cCould't call server from HomePage! ${e}`, 'color: red')
    return {
      props: {} as HomeProps
    }
  }
}

export default HomePage