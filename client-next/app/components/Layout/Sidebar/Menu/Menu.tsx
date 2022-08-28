import React from "react"

import MenuLink from './MenuLink'
import Line from "@/components/Line"
import styles from './Menu.module.scss'
import { IMenuLink } from "./menu.data"

interface MenuProps {
  title: string
  items: IMenuLink[]
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <nav className={styles.menu}>
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.list}>
        {items.map(item => (
          <MenuLink item={item} key={item.link} />
        ))}
      </ul>

      <Line/>
    </nav>
  )
}

export default Menu