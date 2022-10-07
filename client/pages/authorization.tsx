import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Authorization, { AuthorizationProps } from "@/components/pages/Authorization"
import { GetStaticProps } from "next"
import { VideosService } from "@/services/RandomTube"
import { IVideo } from "@/types/entities"
import { shuffle } from "lodash"

const AuthorizationPage: NextPageAuth<AuthorizationProps> = ({ randomVideo }) => {
  return (
    <Authorization randomVideo={randomVideo} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: topVideos } = await VideosService.getMostPopulars()

    return {
      props: {
        randomVideo: shuffle(topVideos)[0]
      } as AuthorizationProps
    }
  }
  catch (e) {
    console.log(`%cCould't call server from AuthorizationPage! ${e}`, 'color: red')

    return {
      props: {
        randomVideo: {} as IVideo
      } as AuthorizationProps 
    }
  }
}

export default AuthorizationPage