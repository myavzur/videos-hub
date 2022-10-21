import { IVideo } from "@/types/entities"

export type PlayerProps = Pick<IVideo, 'videoPath'>

export interface PlayerElement extends HTMLVideoElement {
  msRequestFullscreen?: () => void
  mozRequestFullscreen?: () => void
  webkitRequestFullscreen?: () => void
}