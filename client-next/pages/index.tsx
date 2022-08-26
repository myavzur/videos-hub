import { NextPage } from "next"
import Home from "@/components/Pages/Home"
import Layout from "@/components/Layout"
import Discover from "@/components/Pages/Home/Discover"
import Catalog from "@/components/Catalog"

const HomePage: NextPage = () => {
  return (
    <Layout title="RandomTube">
      <Discover/>
      <Catalog/>
    </Layout>
  )
}

// ? SSG - Server Static Generation


export default HomePage