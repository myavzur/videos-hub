import { IVideo, ICreateVideoBody, IUpdateVideoBody } from "@/types/entities/video.interface";
import { api } from "./api.slice";


export const videoApi = api.injectEndpoints({
  endpoints: builder => ({

    getVideoByTerm: builder.query<IVideo, string>({
      query: term => ({ url: '/videos/search', params: { term } })
    }),

    getVideoById: builder.query<IVideo, IVideo['id']>({
      query: videoId => ({ url: `/videos/id/${videoId}` }),
      providesTags: (result, error, id) => [{ type: 'Video', id }]
    }),

    createVideo: builder.mutation<IVideo, ICreateVideoBody>({
      query: video => ({
        url: '/videos',
        method: 'POST',
        body: video
      }),

      // ? Refresh my channel with new videos
      invalidatesTags: ['MyChannel'] 
    }),

    updateVideo: builder.mutation<IVideo, IUpdateVideoBody>({
      query: ({id, ...video}) => ({
        url: `/videos/id/${id}`,
        method: 'PUT',
        body: video
      }),

      // ? Refresh channel.videos and JUST UPDATED video by id
      invalidatesTags: (result, error, {id}) => [
        { type: 'Video', id },
        { type: 'MyChannel' }
      ]
    }),

    updateViews: builder.mutation<null, IVideo['id']>({
      query: videoId => ({
        url: `/videos/views/${videoId}`,
        method: 'PUT'
      }),

      // ? Refresh views on this video
      invalidatesTags: (result, error, videoId) => [{type: 'Video', id: videoId}]
    }),

    updateLikes: builder.mutation<null, IVideo['id']>({
      query: videoId => ({
        url: `/videos/likes/${videoId}`,
        method: 'PUT'
      }),

      // ? Refresh likes on this video
      invalidatesTags: (result, error, videoId) => [{type: 'Video', id: videoId}]
    }),

    deleteVideo: builder.mutation<null, IVideo['id']>({
      query: videoId => ({
        url: `/videos/id/${videoId}`,
        method: 'DELETE'
      }),

      // ? Refresh likes on this video
      invalidatesTags: (result, error, videoId) => [{type: 'Video', id: videoId}]
    })
  })
})