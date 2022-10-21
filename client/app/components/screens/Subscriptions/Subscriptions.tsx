import React from "react"

import Layout from "@/components/ui/Layout"
import Menu from "@/components/ui/Layout/Sidebar/Menu"

import { api } from "@/store/slices/api/api.slice"

const Subscriptions: React.FC = () => {
  const { data: profile } = api.useGetMyChannelQuery(null)

  return (
    <Layout
      meta={{
        title: 'Subscriptions',
        description: 'Your subscriptions on RandomTube. Watch your favourite channels.'
      }}
    >
      <Menu 
        title="Subscriptions"
        links={
          profile?.subscriptions.map(({toChannel}) => ({
            title: toChannel.name,
            image: toChannel.avatarPath,
            path: `/channels/${toChannel.id}`
          })) || []
        } 
      />
    </Layout>
  )
}

export default Subscriptions