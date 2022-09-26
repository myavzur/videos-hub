import { IconType } from "react-icons"

export interface MenuLinkProps {
	link: {
    title: string
    path: string
    icon?: IconType
    image?: string // Because in my subscriptions there are Images
  }
}