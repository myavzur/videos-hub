// import { Entity, JoinColumn, ManyToOne } from "typeorm";

// import { Base } from "utils/base.entity";
// import { Video } from "./videos.entity";

// @Entity({name: 'videos_has_likes'})
// export class Likes extends Base {

//   // Relations 🎫 
//   @ManyToOne(() => Video)
//   @JoinColumn({name: 'from_channel_id'})
//   fromChannel: Video

//   @ManyToOne(() => Video, video => video.likes)
//   @JoinColumn({name: 'to_video_id'})
//   toVideo: Video

// }