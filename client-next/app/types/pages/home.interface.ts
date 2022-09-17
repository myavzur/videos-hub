import { IVideo } from "@/types/entities"

export interface HomePageProps {
	topVideo: IVideo
	randomVideo: IVideo
	newVideos: IVideo[]
}