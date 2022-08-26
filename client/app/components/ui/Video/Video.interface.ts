import { IVideo } from "@/types/entities"

export interface VideoProps {
  video: IVideo

  // ? Пропы для видео на странице студии
  studioProps?: {
    withUpdateLink?: boolean
    removeHandler?: (videoId: IVideo['id']) => void
  }
}