import { IconType } from 'react-icons'
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'

export interface IMenuLink {
  title: string
  link: string
  icon?: IconType
  image?: string // Because in my subscriptions there are Images
}

export const menu: IMenuLink[] = [
  {title: 'Home',          icon: HiHome,        link: '/'},
  {title: 'Trends',        icon: HiChartBar,    link: '/trending'},
  {title: 'Channel',       icon: HiStar,        link: '/my-channel'},
  {title: 'Subscription',  icon: HiCollection,  link: '/subscriptions'},
]