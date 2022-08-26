import React from "react"

import Layout from "@/components/ui/Layout"
import Menu from "@/components/ui/Layout/Sidebar/Menu"

import { api } from '@/store/slices/api/api.slice'
import Heading from "@/components/ui/Heading"
import { BRAND_NAME } from "@/constants/brand.constants"

const Subscriptions: React.FC = () => {
  const { data } = api.useGetMyChannelQuery(null)

  return (
    <Layout
      meta={{
        title: 'Subscriptions',
        description: `Your subscriptions on ${BRAND_NAME}. Watch your favorite channels.`
      }}
    >
      <Heading> Subscriptions ⛩️ </Heading>
      
      {data?.subscriptions?.length 
        ?
        (
          <Menu 
            title="Subscriptions"
            links={
              data?.subscriptions.map(({toChannel}) => ({
                title: toChannel.name,
                image: toChannel.avatarPath,
                path: `/channels/${toChannel.id}`
              })) || []
            } 
          />
        )
        : <h1>You doesnt have any subscriptions yet... 🏝️</h1>
      }
    </Layout>
  )
}

export default Subscriptions