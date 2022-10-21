import { IVideo } from "@/types/entities"

export interface CatalogProps {
	videos?: IVideo[]
	
	studioProps?: {
		removeHandler?: (videoId: IVideo['id']) => void
		withUpdateLink?: boolean
	}
}