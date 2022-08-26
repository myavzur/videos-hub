import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"

import Video, { VideoProps } from "@/components/screens/Video"

const VideoPage: NextPageAuth<VideoProps> = ({ video }) => {
  return (
    <Video  />
  )
}

export default VideoPage