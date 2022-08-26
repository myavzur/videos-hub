import Catalog from "@/components/ui/Catalog"
import Heading from "@/components/ui/Heading"
import Layout from "@/components/ui/Layout"
import React from "react"

import { TrendingProps } from "./Trending.interface"

const Trendings: React.FC<TrendingProps> = ({ topVideos }) => {
  return (
    <Layout
      meta={{
        title: 'Trendings',
        description: 'Most rated videos on RandomTube. Watch and enjoy! Or not...'
      }}
    >
      <Heading> Trending 🔥</Heading>
      <Catalog 
        videos={topVideos} 
      />
    </Layout>
  )
}

export default Trendings