import { MenuLinkProps } from "../MenuLink/MenuLink.interface"

export interface MenuProps {
	title: string
	links: MenuLinkProps['link'][]
}