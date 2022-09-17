import { IconType } from 'react-icons'
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'


export interface IMenuLink {
	title: string
	path: string
	icon?: IconType
	image?: string // Because in my subscriptions there are Images
}

export const menu: IMenuLink[] = [
	{ title: 'Home', icon: HiHome, path: '/' },
	{ title: 'Trends', icon: HiChartBar, path: '/trending' },
	{ title: 'My channel', icon: HiStar, path: '/channels/me' },
	{ title: 'Subscription', icon: HiCollection, path: '/subscriptions' }
]
