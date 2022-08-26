import { GetStaticProps } from "next"

import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"
import Subscriptions from "@/components/screens/Subscriptions"


const SubscriptionsPage: NextPageAuth = () => {
  return (
    <Subscriptions/>
  )
}
SubscriptionsPage.isPrivatePage = true

export default SubscriptionsPage