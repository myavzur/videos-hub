import { IconType } from "react-icons"

export interface MenuLinkProps {
	link: {
    title: string
    path: string
    icon?: IconType
    image?: string // * Because in subscriptions there are Images
    isPrivate?: boolean // * Only Authorized user could access this link?
  }
}