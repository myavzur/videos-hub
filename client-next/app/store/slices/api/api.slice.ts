// Есть подписки в левом сайдбаре. В другом месте при нажатии кнопки подписаться
// При кнопке подписаться должны также перезапроситься подписки
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Namespaces } from '../namespaces.enum'
import { API_URL, API_HEADERS } from '@/services/RandomTube/constants'
import { IChannel } from '@/types'
import { SubscriptionResults } from '@/types/channel.interface'

export const api = createApi({
  reducerPath: Namespaces.apiSlice, // Название редюсера
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL, 
    headers: API_HEADERS 
  }), // Куда улетают запросы
  tagTypes: ['MyChannel', 'Video'],

  /*
    Операции по baseUrl (получение отправка обновление данных)
      Query    - запросы, получающие данные и сохраняющие их
      Mutation - запросы, изменяющие данные на сервере
  */ 
  endpoints: builder => ({
    getMyChannel: builder.query<IChannel, null>({
      query: () => '/channels/me',
      providesTags: ['MyChannel']
    }),

    subscribe: builder.mutation<SubscriptionResults, IChannel['id']>({
      query: (channelId) => ({
        url: `/channels/subscribe/${channelId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['MyChannel'] 
    })
  })
})