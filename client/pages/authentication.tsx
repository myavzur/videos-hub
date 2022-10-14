import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Authentication, { AuthenticationProps } from "@/components/pages/Authentication"
import { GetStaticProps } from "next"
import { VideosService } from "@/services/RandomTube"
import { IVideo } from "@/types/entities"
import { shuffle } from "lodash"

const AuthenticationPage: NextPageAuth<AuthenticationProps> = ({ randomVideo }) => {
  return (
    <Authentication randomVideo={randomVideo} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: topVideos } = await VideosService.getMostPopulars()

    return {
      props: {
        randomVideo: shuffle(topVideos)[0]
      } as AuthenticationProps
    }
  }
  catch (e) {
    console.log(`%cCould't call server from AuthenticationPage! ${e}`, 'color: red')

    return {
      props: {
        randomVideo: {} as IVideo
      } as AuthenticationProps 
    }
  }
}

export default AuthenticationPage