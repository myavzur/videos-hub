import Catalog from "@/components/ui/Catalog"
import Layout from "@/components/ui/Layout"
import React from "react"

import { TrendingsProps } from "./Trendings.interface"

const Trendings: React.FC<TrendingsProps> = ({ topVideos }) => {
  return (
    <Layout
      meta={{
        title: 'Trendings',
        description: 'Most rated videos on RandomTube. Watch and enjoy! Or not...'
      }}
    >
      <Catalog 
        headingProps={{
          title: '🏆 Trendings 🏆'
        }}
        videos={topVideos} 
      />
    </Layout>
  )
}

export default Trendings