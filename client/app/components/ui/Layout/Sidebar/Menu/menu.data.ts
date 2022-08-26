import { HiChartBar, HiCollection, HiHome, HiStar} from 'react-icons/hi'
import { MenuLinkProps } from '../MenuLink/MenuLink.interface'



export const menu: MenuLinkProps['link'][] = [
	{
		title: 'Home',
		icon: HiHome,
		path: '/'
	},
	{ 
		title: 'Trending', 
		icon: HiChartBar, 
		path: '/trending' 
	},
	{ 
		title: 'Channel', 
		icon: HiStar, 
		path: '/channels/me', 
		isPrivate: true 
	},
	{ 
		title: 'Subscriptions', 
		icon: HiCollection, 
		path: '/subscriptions', 
		isPrivate: true 
	}
]
