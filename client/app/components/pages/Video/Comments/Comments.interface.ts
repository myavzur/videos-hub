import { IComment, IVideo } from "@/types/entities";

export interface CommentsProps {
  comments: IComment[],
  videoId: IVideo['id']
}