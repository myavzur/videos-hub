import React from "react"
import { IVideo } from "@/types"

interface HomeProps {
  randomVideo: IVideo,
  mostPopularVideo: IVideo,
  newVideos: IVideo[]
}

const Home: React.FC<HomeProps> = ({ randomVideo, mostPopularVideo, newVideos }) => {
  return (
    <React.Fragment>
      Home
    </React.Fragment>
  )
}

export default Home