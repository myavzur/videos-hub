import { StatisticsProps } from "../Statistics/Statistics.interface";
import { VideoProps } from "../Video.interface";

export interface VideoLargeProps {
  video: VideoProps['video'] 
  orientation?: 'portait'
}