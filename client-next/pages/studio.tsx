import { NextPageAuth } from "@/components/providers/AuthProvider/private-route"
import Studio from "@/components/screens/Studio"

const StudioPage: NextPageAuth = () => {
  return (
    <Studio />
  )
}

StudioPage.isPrivatePage = true

export default StudioPage