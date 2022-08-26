import { IVideo } from "@/types/entities"

export interface HomeProps {
	topVideo?: IVideo
	randomVideo?: IVideo
	newVideos?: IVideo[]
}