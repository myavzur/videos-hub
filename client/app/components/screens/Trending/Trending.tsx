import Catalog from "@/components/ui/Catalog"
import Heading from "@/components/ui/Heading"
import Layout from "@/components/ui/Layout"
import { useDrag } from "@use-gesture/react"
import React from "react"
import { useSpring, animated } from '@react-spring/web'

import { TrendingProps } from "./Trending.interface"
import Cards from "./Cards"

const Trendings: React.FC<TrendingProps> = ({ topVideos }) => {
  const [ styles, api ] = useSpring( () => ({ x: 0, y: 0}))
  const bindDrag = useDrag(state => {
    api.start({
      x: state.down ? state.movement[0] : 0,
      y: state.down ? state.movement[1] : 0,
      immediate: state.down // * В данном контексте определяет, что кубик будет двигаться быстро только когда драгают, обратно вернеться плавно!
    })
  })

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

      <Cards/>

    </Layout>
  )
}

export default Trendings