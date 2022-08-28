import { NextPage } from "next"
import Home from "@/components/screens/Home"

const HomePage: NextPage = () => {
  return (
    <Home />
  )
}

// ? SSG - Server Static Generation
export async function getStaticProps() {
  return {
    props: {
      
    }// will be passed to the page component as props
  }
}

export default HomePage