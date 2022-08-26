import { IVideo } from "@/types/entities"

export interface PlayerProps {
  videoPath: IVideo['videoPath']
}

export interface PlayerElement extends HTMLVideoElement {
  msRequestFullscreen?: () => void
  mozRequestFullscreen?: () => void
  webkitRequestFullscreen?: () => void
}