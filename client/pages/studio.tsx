import { NextPageAuth } from "@/components/providers/AuthProvider/private-route.interface"
import Studio from "@/components/pages/Studio"

const StudioPage: NextPageAuth = () => {
  return (
    <Studio />
  )
}

StudioPage.isPrivatePage = true

export default StudioPage